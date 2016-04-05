import Ember from 'ember';

export default Ember.Component.extend({
  billDetails: false,
  actions: {
    showBillDetails() {
      this.set('billDetails', true);
    },
    hideBillDetails() {
      this.set('billDetails', false);
    }
  }
});
