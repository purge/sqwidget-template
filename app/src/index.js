define([
  'Ractive',
  'rv!templates/index.html'
], function(Ractive, template) {

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
