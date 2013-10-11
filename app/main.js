require({
  baseUrl: 'lib',
  paths: {
    'src': '../src',
    'templates': '../templates'
  },
  map: {
    '*': {
      'selector': 'jquery',
      //'css': 'require-css/css',
      //'is': 'require-is/is',
      //'cs': 'require-coffee/cs'
    }
  }
}, ['src/index']);
