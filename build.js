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
    }
  ]
}
