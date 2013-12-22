App.Views.EditCategory = Backbone.View.extend({
  template: HandlebarsTemplates['categories/edit'],

  initialize: function() {
    this.listenTo(this.model, 'change', this.success)
  },

  events: {
    'click button.submit': 'updateCategory',
    'click button.discard': 'discard'
  },

  render: function() {
    console.log(this.model)
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  success: function() {
    App.Vent.trigger('category:update', this.model);
  },

  updateCategory: function(e) {
    e.preventDefault();
    this.model.set('name', this.$('#name').val());
    this.model.save();
  },

  discard: function(e) {
    e.preventDefault();
    App.Vent.trigger('discard');
  }
});
