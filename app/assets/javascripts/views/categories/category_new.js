App.Views.NewCategory = Backbone.View.extend({
  template: HandlebarsTemplates['categories/new'],

  initialize: function() {
    this.listenTo(this.model, 'sync', this.success)
  },

  events: {
    'click button': 'saveCategory'
  },

  render: function() {
    this.$el.html(this.template(this.model));
    return this;
  },

  saveCategory: function(e) {
    e.preventDefault();
    this.model.set('name', this.$('#name').val());
    this.model.save();
  },

  success: function() {
    this.clearForm();
    App.Vent.trigger('category:create', this.model);
  },

  clearForm: function() {
    this.$('#name').val('');
    delete(this.model.id)
  }
});
