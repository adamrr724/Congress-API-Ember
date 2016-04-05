import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    committeeLookup() {
      var params = {
        search: this.get('name')
      };
      this.sendAction('committeeLookup', params);
    }
  }
});
