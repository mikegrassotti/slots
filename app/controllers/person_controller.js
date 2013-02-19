var store = require('../store');

var PersonController = Ember.ObjectController.extend({

  destroy: function() {
    if (!confirm('Are you sure?')) return;
    this.get('model').deleteRecord();
    store.commit();
    this.get('target').transitionTo('people');
  }

});

module.exports = PersonController;

