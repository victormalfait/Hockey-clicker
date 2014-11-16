import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    creerUtilisateur: function() {
      // Get the todo title set by the "New Todo" text field
      var login = this.get('newLogin');
      var email = this.get('newEmail');
      if (!login || !email) { return false; }
      if (!login.trim()) { return; }

      // Create the new Todo model
      var utilisateurs = this.store.createRecord('utilisateurs', {
        login: login,
        email: email
      });

      // Clear the "New Todo" text field
      this.set('newLogin', '');

      // Save the new model
      utilisateurs.save();
    }
  }
});
