import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    creerUtilisateur: function() {
      var login = this.get('login');
      var email = this.get('email');
      if (!login || !email) { return false; }
      if (!login.trim()) { return; }

      var utilisateur = this.store.createRecord('utilisateur', {
        login: login,
        email: email,
        points: 0
      });

      // Save the new model
      utilisateur.save();
      this.transitionToRoute('game',utilisateur.id);
    }
  }
});
