window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Vent: _.clone(Backbone.Events),
  initialize: function() {
    new App.Routers.MainRouter();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  App.initialize();
});
