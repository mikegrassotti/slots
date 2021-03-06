var SlotView = Ember.View.extend({
  tagName: 'ul',
  classNames: ['slot'],
  listHeight: null,
  liCount: null,
  liHeight: null,
  liWidth: null,
  spinning: false,
  spinDuration: 100,
  stopAt: 1,
  spinCount: 0,
  click: function() {
    this.toggleProperty('spinning');
  },
  didInsertElement: function() {
    console.log('inserted slotView');
    var li = this.$().find('li').first();
    this.set('liHeight', li.outerHeight());
    this.set('liWidth', li.outerWidth());
    this.set('liCount', this.$().children().length);
    this.set('listHeight', (this.get('liHeight') * this.get('liCount')));
    this.$().css('position', 'relative');
  },
  spinningDidChange: function() {
    console.log('Spinning changed to: ', this.get('spinning'));
    if (this.get('spinning')) {
      this.spinEm();
    }
  }.observes('spinning'),
  spinEm: function() {
    var self = this;
    console.log("spin # ", endNum)
    this.$().css('top', -this.get('listHeight'));
    this.$().animate( { 'top' : '0px' }, this.get('spinDuration'), 'linear', function() {
      if (self.get('spinning')) {
        self.spinEm();
      }
    });
  },
  stopEm: function() {
    var self = this;
    var endNum = this.randomRange( 1, this.get('liCount') );
    console.log("stopping at: ", endNum)
    var finalPos = - ( (this.get('liHeight') * endNum) - this.get('liHeight') );
    var finalSpeed = this.get('spinDuration') / 2;
    this.$().css('top', -this.get('listHeight'));
    this.$().animate( {'top': finalPos}, finalSpeed, 'swing', function() {
      self.stopped(endNum);
    });
  },
  stopped: function(endNum) {
    console.log('STOPPED AT', endNum);
  },
  randomRange: function(low, high) {
    return Math.floor( Math.random() * (1 + high - low) ) + low;
  }
  
});

module.exports = SlotView;

