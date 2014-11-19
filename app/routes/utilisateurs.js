import Ember from 'ember';

var UtilisateursRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('utilisateur');
  }
});

export default UtilisateursRoute;
