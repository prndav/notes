App.Routers.MainRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'notes': 'notesIndex',
    'categories': 'categoriesIndex',
    'categories/new': 'categoriesNew',
    'categories/:id/edit': 'categoriesEdit',
    'categories/:id/notes': 'categoriesNotes'
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
  },

  categoriesIndex: function() {
    this.layoutViews();
    this.contentView.swapMain(new App.Views.DefaultMain());
    this.contentView.swapSide(new App.Views.CategoriesIndex({ collection: new App.Collections.Categories }));
  },

  categoriesNew: function() {
    this.layoutViews();
    this.contentView.swapMain(new App.Views.NewCategory({ model: new App.Models.Category()}));
    this.contentView.swapSide(new App.Views.CategoriesIndex({ collection: new App.Collections.Categories()}));
  },

  categoriesEdit: function(id) {
    var self = this;
    this.layoutViews();
    this.contentView.swapSide(new App.Views.CategoriesIndex({ collection: new App.Collections.Categories() }));
    new App.Models.Category({id: id}).fetch({success: function(model) {
      self.contentView.swapMain(new App.Views.EditCategory({ model: model }));
    }})
  },



  categoriesNotes: function(id) {
    this.layoutViews();
    this.contentView.swapMain(new App.Views.DefaultMain());
    this.contentView.swapSide(new App.Views.NotesIndex({ model: new App.Models.Category({id: id}) }));
  }
});
