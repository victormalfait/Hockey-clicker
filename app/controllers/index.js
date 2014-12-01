import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
      play: function() {
        this.transitionToRoute('user.utilisateurs');
      }
  }
});
