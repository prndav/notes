App.Routers.MainRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'notes': 'notesIndex',
  },

  initialize: function() {
    this.headerView = new App.Views.Header();
    this.contentView = new App.Views.Content();
  },

  layoutViews: function() {
    $('#header').html(this.headerView.render().el)
    $('#content').html(this.contentView.render().el)
  },

  index: function() {
    this.layoutViews();
    this.contentView.swapMain(new App.Views.DefaultMain());
    this.contentView.swapSide(new App.Views.DefaultAside());
  },

  notesIndex: function() {
    this.layoutViews();
    this.contentView.swapMain(new App.Views.DefaultMain());
    this.contentView.swapSide(new App.Views.NotesIndex({ collection: new App.Collections.Notes }));
  }
});
