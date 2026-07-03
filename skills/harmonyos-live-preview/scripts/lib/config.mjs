// Assembles the immutable runtime config for one preview session from caller inputs +
// auto-discovery. Pure assembly: no spawning, no servers — just the resolved object the
// builder/engine/bridge read. Build-artifact paths and the ability ohmurl are derived here so
// the layout knowledge lives in one place.
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { discoverToolchain, discoverProject } from './discovery.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const asset = (file) => path.resolve(HERE, '../assets', file);

// Per-device render geometry. The Previewer engine needs three pieces that must agree:
//   resolution   — physical framebuffer px, passed as -or/-cr (this IS the frame size)
//   density      — screen dpi, passed as -sd; logical vp = px / (density / 160)
//   deviceConfig — the -f settings file, whose "Resolution" is that same logical vp and
//                  whose DeviceType drives which ArkUI deviceType/breakpoints the app sees.
// Consistency check: resolution / (density / 160) === the config's vp Resolution.
//   phone : 1080x2340 @480dpi → 360x780 vp  (portrait)
//   tablet: 2048x1280 @320dpi → 1024x640 vp (landscape, matches DevEco's tablet profile)
const DEVICE_PROFILES = {
  phone: {
    deviceConfig: asset('phoneSettingConfig_Phone.json'),
    resolution: [1080, 2340],
    density: 480,
    orientation: 'portrait',
  },
  tablet: {
    deviceConfig: asset('tabletSettingConfig_Tablet.json'),
    resolution: [2048, 1280],
    density: 320,
    orientation: 'landscape',
  },
};

export function resolveConfig(opts = {}) {
  const projectDir = path.resolve(opts.project || process.cwd());
  const toolchain = discoverToolchain(opts.clt);
  const project = discoverProject(projectDir, { module: opts.module, page: opts.page });

  const device = opts.device || 'phone';
  const profile = DEVICE_PROFILES[device];
  if (!profile) {
    throw new Error(
      `unsupported --device "${device}"; supported: ${Object.keys(DEVICE_PROFILES).join(', ')}`,
    );
  }

  return Object.freeze({
    toolchain,
    project,
    device,
    deviceConfig: opts.deviceConfig || process.env.HARMONY_DEVICE_CONFIG || profile.deviceConfig,
    resolution: profile.resolution,
    density: profile.density,
    orientation: profile.orientation,
    ports: {
      http: Number(opts.httpPort ?? process.env.PORT ?? 8088),
      lws: Number(opts.lwsPort ?? process.env.LWS ?? 41200),
    },
    watch: opts.watch !== false,
    // false (default) = page-preview mode: render the page via -url, like DevEco's per-@Entry preview.
    // true = ability mode: launch the real UIAbility and show whatever its loadContent loads.
    abilityMode: opts.abilityMode === true,
    // Auto-release the preview once the last browser viewer closes (default on). --keep-alive turns
    // it off for headless / always-on use. Grace tolerates a reload before tearing down.
    autoRelease: opts.keepAlive !== true,
    releaseGraceMs: Number(opts.releaseGraceMs ?? process.env.PREVIEW_RELEASE_GRACE_MS ?? 10000),
  });
}

// Build artifacts produced by `hvigorw PreviewBuild`, laid out as
// .preview/<product>/intermediates/{loader,assets,res}/<target>/… — the same task graph DevEco's
// own preview daemon drives. Its ArkTS compile step (PreviewArkTS) embeds inspector/debug metadata
// (component tree, per-node rects, source line mapping) that a plain `assembleHap` build strips, so
// this is what makes the engine's "inspector" command return a populated tree instead of a bare root.
export function buildPaths(config) {
  const { moduleDir, product, target } = config.project;
  const intermediates = path.join(moduleDir, '.preview', product, 'intermediates');
  return {
    intermediates,
    loaderJson: `${intermediates}/loader/${target}/loader.json`,
    jsApp: `${intermediates}/assets/${target}/ets`,
    appResource: `${intermediates}/res/${target}`,
  };
}

// e.g. @normalized:N&&&default/src/main/ets/defaultability/DefaultAbility&
export function abilityOhmurl(config) {
  const { pkgName, abilitySrc } = config.project;
  return `@normalized:N&&&${pkgName}/${abilitySrc.replace(/\.ets$/, '')}&`;
}
