import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path: '/'}),
  this.resource('user', function() {
    this.route('utilisateurs', {path: '/jouer'})
    this.route('game', {path: 'game/:id_utilisateur'})
  });
});

export default Router;
