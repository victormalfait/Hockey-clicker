import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('application', {path: '/application'});
	this.route('game', {path: '/game'});
	this.route('utilisateurs', {path: '/utilisateurs'});
});

export default Router;
