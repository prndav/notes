App.Views.Note = Backbone.View.extend({

  tagName: 'li',

  template: HandlebarsTemplates['notes/note'],

  initialize: function() {
    this.listenTo(this.model, 'destroy', function() { this.remove()});
    this.listenTo(this.model, 'change', this.render)
  },

  events: {
    'click a.show-link': 'showNote',
    'click a.remove-link': 'removeNote',
    'click a.update-link': 'editNote',
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  showNote: function(e) {
    e.preventDefault();
    App.Vent.trigger('renderNote', this.model);
  },

  removeNote: function(e) {
    e.preventDefault();
    if (!confirm('Are you sure?')) {
      return;
    };

    this.model.destroy({
      wait: true
    });
  },

  editNote: function(e) {
    e.preventDefault();
    App.Vent.trigger('editNote', this.model);
  }
});
