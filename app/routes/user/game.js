import Ember from 'ember';
import User from 'hockey-clicker/models/user';

export default Ember.Route.extend({
  model: function(param) {
    return User;
  }
});
