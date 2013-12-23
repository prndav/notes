App.Views.NewCategory = Backbone.View.extend({
  template: HandlebarsTemplates['categories/new'],

  initialize: function() {
    this.listenTo(this.model, 'sync', this.success)
  },

  events: {
    'click button.submit': 'saveCategory',
    'click button.discard': 'discard'
  },

  render: function() {
    this.$el.html(this.template(this.model));
    return this;
  },

  saveCategory: function(e) {
    var self = this;
    e.preventDefault();
    this.model.set('name', this.$('#name').val());
    this.model.save({}, {
      success: function() {
        self.clearForm();
        App.Vent.trigger('category:create', self.model);
      }
    });
  },

  // success: function() {
  //   this.clearForm();
  //   App.Vent.trigger('category:create', this.model);
  // },

  clearForm: function() {
    this.$('#name').val('');
    delete(this.model.id)
  },

  discard: function(e) {
    e.preventDefault();
    App.Vent.trigger('discard');
  }
});
