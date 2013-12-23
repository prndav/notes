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
    this.listenTo(App.Vent, 'addNote', this.addNote);
    this.listenTo(App.Vent, 'note:create', this.afterAddNote);
    this.listenTo(App.Vent, 'renderNote', this.renderNote);
    this.listenTo(App.Vent, 'editNote', this.editNote);
    this.listenTo(App.Vent, 'note:update', this.afterCreate);
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
    Backbone.history.navigate('/categories');

  },

  editCategory: function(model) {
    this.swapMain(new App.Views.EditCategory({ model: model }))
  },

  discard: function() {
    this.swapMain(new App.Views.DefaultMain());
  },

  addNote: function(model) {
    this.swapMain(new App.Views.NewNote({ model: new App.Models.Note({category_id: model.id}) }));
  },

  renderNote: function(model) {
    this.swapMain(new App.Views.NoteDetails({ model: model }));
  },

  editNote: function(model) {
    this.swapMain(new App.Views.EditNote({ model: model }));
  },

  afterAddNote: function() {
    this.swapMain(new App.Views.DefaultMain());
  }
});
