App.Views.NotesIndex = Backbone.View.extend({

  className: 'notes',

  template: HandlebarsTemplates['notes/index'],

  initialize: function() {
    this.collection.fetch({ reset: true })
    this.listenTo(this.collection, 'reset', this.render)
  },

  render: function() {
    this.$el.html(this.template());
    this.collection.forEach(this.renderNote, this)
    return this;
  },

  renderNote: function(model) {
    v = new App.Views.Note({ model: model })
    this.$('ul').append(v.render().el)
  }

});
