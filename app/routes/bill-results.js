import Ember from 'ember';

export default Ember.Route.extend({
  model: function(filter) {
    console.log(filter);
    var url = 'http://congress.api.sunlightfoundation.com/' + filter.filter;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON.results);
      return responseJSON.results;

    });
  }
});
