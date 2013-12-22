App.Views.NoteDetails = Backbone.View.extend({
  template: HandlebarsTemplates['notes/note_details'],

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});
