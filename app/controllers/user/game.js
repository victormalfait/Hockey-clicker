import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addPoint: function() {
      var user = this.store.find('utilisateur', 2);
      console.debug(user);
      user.save();
    }
  }
});
