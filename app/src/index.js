define([
  'Ractive',
  'less!src/less/test',
  'rv!src/templates/index.html'
], function(Ractive, css, template) {

  var module = { views: {} };

  module.Controller = function (opts) {
    this.view = new Ractive({
      el: opts.el,
      template: template,
      data: {
        message: "Hello World"
      }
    });
  };

  return module;
});
