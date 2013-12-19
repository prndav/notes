App.Views.Note = Backbone.View.extend({

  tagName: 'li',

  template: HandlebarsTemplates['notes/note'],

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
});
