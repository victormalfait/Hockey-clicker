import Ember from 'ember';
import User from 'hockey-clicker/models/user';

export default Ember.ObjectController.extend({
  actions: {
    newUser: function() {
      var login = this.get('login');
      var email = this.get('email');
      if (!login || !email) { return false; }
      if (!login.trim()) { return false; }

      User.push({login: login}, {email: email}, {points: 0}, {id: (user.length +1)});
      this.transitionToRoute('user.game', user.length);
    }
  }
});
