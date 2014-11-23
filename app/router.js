import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('utilisateurs', {path: '/'});
  this.resource('game', {path: 'game/:id_utilisateur'});
});

export default Router;
