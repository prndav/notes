App.Views.NotesIndex = Backbone.View.extend({

  className: 'notes',

  template: HandlebarsTemplates['notes/index'],

  events: {
    'click button': 'addNote'
  },

  initialize: function() {
    this.model.notes.fetch({ reset: true });
    this.listenTo(this.model.notes, 'reset', this.render);
    this.listenTo(App.Vent, 'note:create', this.addToCollection);
    this.listenTo(this.model.notes, 'add', this.renderNote);
  },

  render: function() {
    this.$el.html(this.template());
    this.model.notes.forEach(this.renderNote, this)
    return this;
  },

  renderNote: function(model) {
    v = new App.Views.Note({ model: model });
    this.$('ul').append(v.render().el);
  },

  addNote: function(e) {
    e.preventDefault();
    App.Vent.trigger('addNote', this.model);
  },

  addToCollection: function(model) {
    this.model.notes.add(model);
  }

});
