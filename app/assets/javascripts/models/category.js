App.Models.Category = Backbone.Model.extend({
  urlRoot: '/categories',

  initialize: function() {
    this.notes = new App.Collections.Notes();
    this.notes.url = '/categories/' + this.id + '/notes';
  }
});
