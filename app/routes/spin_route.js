var spin = require('../models/spin');

var SpinRoute = Ember.Route.extend({
  model: function() {
    return spin.createRecord()
  }

});

module.exports = SpinRoute;

