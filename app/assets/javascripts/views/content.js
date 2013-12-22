App.Views.Content = Backbone.View.extend({
  id: 'content-area',

  template: HandlebarsTemplates['content'],

  initialize: function() {
    this.listenTo(App.Vent, 'category:showNotes', this.categoryShowNotes);
    this.listenTo(App.Vent, 'category:newCategory', this.newCategory);
    this.listenTo(App.Vent, 'category:create', this.swapMain(new App.Views.DefaultMain()))
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
  }
});
