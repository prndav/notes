App.Views.Content = Backbone.View.extend({
  id: 'content-area',

  template: HandlebarsTemplates['content'],

  initialize: function() {
    this.listenTo(App.Vent, 'category:showNotes', this.categoryShowNotes);
    this.listenTo(App.Vent, 'category:newCategory', this.newCategory);
    this.listenTo(App.Vent, 'category:create', this.afterCreate);
    this.listenTo(App.Vent, 'category:edit', this.editCategory);
    this.listenTo(App.Vent, 'category:update', this.afterCreate);
    this.listenTo(App.Vent, 'discard', this.discard);
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  swapMain: function(v) {
    this.changeCurrentMainView(v);
    this.$('#main-area').html(this.currentMainView.render().el);
  },

  swapSide: function(v) {
    this.changeCurrentSideView(v)
    this.$('#sidebar-area').html(this.currentSideView.render().el)
  },

  changeCurrentMainView: function(v) {
    this.currentMainView = v;
  },

  changeCurrentSideView: function(v) {
    this.currentSideView = v;
  },

  categoryShowNotes: function(model) {
    this.swapSide(new App.Views.NotesIndex({ model: model }))
  },

  newCategory: function() {
    this.swapMain(new App.Views.NewCategory({ model: new App.Models.Category() }))
  },

  afterCreate: function() {
    this.swapMain(new App.Views.DefaultMain());
  },

  editCategory: function(model) {
    this.swapMain(new App.Views.EditCategory({ model: model }))
  },

  discard: function() {
    this.swapMain(new App.Views.DefaultMain());
  }
});
