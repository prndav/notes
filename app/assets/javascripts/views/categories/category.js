App.Views.Category = Backbone.View.extend({

  tagName: 'li',

  template: HandlebarsTemplates['categories/category'],

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  events: {
   'click a': 'categoryNotes'
  },

  categoryNotes: function(e) {
    e.preventDefault();
    App.Vent.trigger('category:showNotes', this.model)
    Backbone.history.navigate('/categories/' + this.model.id + '/notes')
  }


});
