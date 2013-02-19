var store = require('../store');

var SpinController = Ember.ObjectController.extend({

  buttonText: 'Spin',
  changingZip: false,
  zip: '11201',

  isReady: function() {
    return !this.get('startedAt')
  }.property('startedAt'),
  
  isSpinning: function() {
    return !!this.get('startedAt') && !this.get('stoppedAt')
  }.property('startedAt', 'stoppedAt'),

  isDone: function() {
    return !!this.get('stoppedAt')
  }.property('stoppedAt'),

  spin: function() {
    now = new Date()
    this.set('startedAt', now)
  },
  
  stop: function() {
    now = new Date()
    this.set('stoppedAt', now)
  },
  
  reset: function() {
    this.transitionTo('index')
  }


});

module.exports = SpinController;

