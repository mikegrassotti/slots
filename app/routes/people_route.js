var Person = require('../models/person');

var PersonRoute = Ember.Route.extend({

  model: function() {
    return Person.find();
  }

});

module.exports = PersonRoute;

