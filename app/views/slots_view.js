var SlotsView = Ember.View.extend({
  templateName: 'slots',
  // numberBinding: 'controller.number',
  // winnerNumberBinding: 'controller.winnerNumber',
  
  didInsertElement: function() {
    console.log('inserted slotsView')
    // fancy example
    $('.fancy .slot').jSlots({
        number : this.get('controller.number'),
        winnerNumber : this.get('controller.winnerNumber'),
        spinner : '#playFancy',
        // easing : 'easeOutSine',
        easing: 'swing',
        time : this.get('controller.time'),
        loops : this.get('controller.loops'),
        onStart : function() {
            $('.slot').removeClass('winner');
        },
        onWin : function(winCount, winners) {
            // only fires if you win
            
            $.each(winners, function() {
                this.addClass('winner');
            });

            // react to the # of winning slots                 
            if ( winCount === 1 ) {
                //alert('You got ' + winCount + ' 7!!!');
            } else if ( winCount > 1 ) {
                //alert('You got ' + winCount + ' 7’s!!!');
            }
            
        }
    });
  },
  contentChanged: function() {
    this.rerender();
  }.observes("controller.number")
});

module.exports = SlotsView;

