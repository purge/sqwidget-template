//requirejs build config (r.js -o build.js)
//
{
  appDir: 'app',
  dir: 'dist',
  mainConfigFile: 'app/main.js',

  // faster build - only minifies layers
  skipDirOptimize: true,
  keepBuildDir: true,

  modules: [
    {
      name: '../main',
      include: ['src/index']
      excludeShallow: ['require-css/css-builder', 'require-less/lessc-server', 'require-less/lessc']
    }
  ]
}
