import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    creerUtilisateur: function() {
      // var login = this.get('login');
      // var email = this.get('email');
      // if (!login || !email) { return false; }
      // if (!login.trim()) { return; }

      var utilisateur = this.store.createRecord('utilisateurs', {
        login: "login",
        email: "email"
      });
      
      // Save the new model
      utilisateur.save();
      this.transitionToRoute('game');
    }
  }
});
