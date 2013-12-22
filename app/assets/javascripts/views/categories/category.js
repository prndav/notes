App.Views.Category = Backbone.View.extend({

  tagName: 'li',

  template: HandlebarsTemplates['categories/category'],

  initialize: function() {
    this.listenTo(this.model, 'destroy', this.triggerCategoryDestroy);
    this.listenTo(this.model, 'destroy', function() { this.remove()});
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  events: {
   'click a.category-link': 'categoryNotes',
   'click a.remove-link': 'removeCategory'
  },

  categoryNotes: function(e) {
    e.preventDefault();
    App.Vent.trigger('category:showNotes', this.model)
    Backbone.history.navigate('/categories/' + this.model.id + '/notes')
  },

  removeCategory: function(e) {
    e.preventDefault();
    if (!confirm('Are you sure?')) {
      return;
    };

    this.model.destroy({
      wait: true
    });
  },

  triggerProjectDestroy: function() {
    App.Vent.trigger('project:destroy');
  }

});
