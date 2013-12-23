App.Views.CategoriesIndex = Backbone.View.extend({

  className: 'categories',

  template: HandlebarsTemplates['categories/index'],

  initialize: function() {
    this.collection.fetch({ reset: true });
    this.listenTo(this.collection, 'reset', this.render);
    this.listenTo(App.Vent, 'category:create', this.addToCollection);
    this.listenTo(this.collection, 'add', this.renderCategory);
  },

  events: {
    'click button': 'newCategory'
  },

  render: function() {
    this.$el.html(this.template());
    this.collection.forEach(this.renderCategory, this)
    return this;
  },

  renderCategory: function(model) {
    v = new App.Views.Category({ model: model })
    this.$('ul').append(v.render().el)
    console.log(model);
  },

  newCategory: function(e) {
    e.preventDefault();
    App.Vent.trigger('category:newCategory')
    Backbone.history.navigate('/categories/new')
  },

  addToCollection: function(model) {
    model.notes.url = '/categories/' + model.get('id') + '/notes';
    this.collection.add(model);
  }

});

