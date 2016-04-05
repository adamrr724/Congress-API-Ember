import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    recentBillLookup() {
      var filter = 'bills?history.active=true&order=introduced_on&apikey=cdc407a126514e259eb1497de57413ec';
      this.sendAction('recentBillLookup', filter);
    },
    upcomingHouseBillLookup() {
      var filter = 'upcoming_bills?chamber=senate&order=scheduled_at&apikey=cdc407a126514e259eb1497de57413ec';
      this.sendAction('upcomingHouseBillLookup', filter);
    }
  }
});
