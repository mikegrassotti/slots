var Person = require('../models/person');

var PersonRoute = Ember.Route.extend({

  events: {
    insertCoin: function() {
      // debugger;
      this.transitionTo('spin')
    }    
  }

});

module.exports = PersonRoute;

