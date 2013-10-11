require({
  baseUrl: 'lib',
  paths: {
    'src': '../src',
    'csssrc': '../css',
  },
  map: {
    '*': {
      'css': 'require-css/css',
      'less': 'require-less/less'
      //'is': 'require-is/is',
      //'cs': 'require-coffee/cs'
    }
  }
}, ['src/index']);
