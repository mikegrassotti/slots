var store = require('../store');

var EditPersonController = Ember.ObjectController.extend({

  save: function() {
    store.commit();
    this.redirectToModel();
  },

  redirectToModel: function() {
    var router = this.get('target');
    var model = this.get('model');
    router.transitionTo('person', model);
  }

});

module.exports = EditPersonController;

