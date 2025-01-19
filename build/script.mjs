import * as esbuild from "esbuild";

// Build script
esbuild.build({
  entryPoints: ["src/index.ts"],
  bundle: true,
  outfile: "./HiddenDelight_BP/scripts/index.js",
  format: "esm",
  external: ["@minecraft/server", "@minecraft/server-ui"],
  minify: true,
  treeShaking: true,
}),

console.info("script build done");
