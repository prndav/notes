App.Views.CategoriesIndex = Backbone.View.extend({

  className: 'categories',

  template: HandlebarsTemplates['categories/index'],

  initialize: function() {
    this.collection.fetch({ reset: true })
    this.listenTo(this.collection, 'reset', this.render)
  },

  render: function() {
    this.$el.html(this.template());
    this.collection.forEach(this.renderCategory, this)
    return this;
  },

  renderCategory: function(model) {
    v = new App.Views.Category({ model: model })
    this.$('ul').append(v.render().el)
  }

});
