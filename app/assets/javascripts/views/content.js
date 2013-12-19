App.Views.Content = Backbone.View.extend({
  id: 'content-area',

  template: HandlebarsTemplates['content'],

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  swapMain: function(v) {
    this.changeCurrentMainView(v)
    this.$('#main-area').html(this.currentMainView.render().el)
  },

  swapSide: function(v) {
    this.changeCurrentSideView(v)
    this.$('#sidebar-area').html(this.currentSideView.render().el)
  },

  changeCurrentMainView: function(v) {
    this.currentMainView = v
  },

  changeCurrentSideView: function(v) {
    this.currentSideView = v
  }
});

