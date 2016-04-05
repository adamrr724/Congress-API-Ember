import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    zipLookup(params) {
      this.transitionTo('results', params.zip);
    },
    committeeLookup(params) {
      this.transitionTo('committee-results', params.search);
    },
    recentBillLookup(filter) {
      this.transitionTo('bill-results', filter);
    },
    upcomingHouseBillLookup(filter) {
      this.transitionTo('bill-results', filter);
    }
  }
});
