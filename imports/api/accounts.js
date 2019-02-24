import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'accounts.deleteCurrentAccount'(isDeleteTasks) {
    if (!this.userId)
      throw new Meteor.Error('not-authorized');

    const isUserDeleted = Meteor.users.remove({ _id: this.userId });

    if (isUserDeleted && isDeleteTasks)
      Meteor.call("tasks.deleteAllOwnTasks");

  }
});
