App.Views.NewNote = Backbone.View.extend({
  template: HandlebarsTemplates['notes/new'],

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  initialize: function() {
  },

  events: {
    'click button.submit': 'saveNote',
    'click button.discard': 'discard'
  },

  saveNote: function(e) {
    var self = this;
    e.preventDefault();
    this.model.set('title', this.$('#title').val());
    this.model.set('content', this.$('#content').val());
    this.model.save({}, {
      success: function() {
        App.Vent.trigger('note:create', self.model);
      }
    });
  },

  discard: function(e) {
    e.preventDefault();
    App.Vent.trigger('discard');
  }
});


