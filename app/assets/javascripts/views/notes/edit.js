App.Views.EditNote = Backbone.View.extend({
  template: HandlebarsTemplates['notes/edit'],

  initialize: function() {
    this.listenTo(this.model, 'change', this.success)
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  events: {
    'click button.discard': 'discard',
    'click button.submit': 'updateNote'
  },

  discard: function(e) {
    e.preventDefault();
    App.Vent.trigger('discard');
  },

  success: function() {
    App.Vent.trigger('note:update', this.model);
  },

  updateNote: function(e) {
    e.preventDefault();
    this.model.set('title', this.$('#title').val());
    this.model.set('content', this.$('#content').val());
    this.model.save();
  },
});
