import { Meteor } from 'meteor/meteor';

console.log("I am. (accounts.js)");

Meteor.methods({
  'accounts.deleteCurrentAccount'() {
    if (!this.userId)
      throw new Meteor.Error('not-authorized');

    Meteor.users.remove({ _id: this.userId });
  }
});