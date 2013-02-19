var EditPersonController = require('./edit_person_controller');

// inherit from edit controller
var NewPersonController = EditPersonController.extend();

module.exports = NewPersonController;

