import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'accounts.deleteCurrentAccount'() {
    if (!this.userId)
      throw new Meteor.Error('not-authorized');

    Meteor.users.remove({ _id: this.userId });
  }
});