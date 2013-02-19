var person = require('../models/person');

var NewPersonRoute = Ember.Route.extend({

  renderTemplate: function() {
    this.render('edit_person', {controller: 'new_person'});
  },

  model: function() {
    return person.createRecord();
  },

  exit: function() {
    var model = this.get('controller.model');
    if (!model.get('isSaving')) {
      model.deleteRecord();
    }
  }

});

module.exports = NewPersonRoute;

