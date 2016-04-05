import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('results', {path: '/results/:zip'});
  this.route('committee-results', {path: '/committee-results/:search'});
  this.route('bill-results', {path: '/bill-results/:filter'});
});

export default Router;
