import Ember from 'ember';

export default Ember.Route.extend({
  model: function(param) {
    return Ember.RSVP.hash({
      utilisateurs: this.store.find('utilisateur'),
      utilisateur: this.store.find('utilisateur', param)
    });
  }
});
