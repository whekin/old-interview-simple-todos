import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Tasks = new Mongo.Collection('tasks');

if (Meteor.isServer)
  Meteor.publish('tasks', function tasksPublication() {
    return Tasks.find({
      $or: [
        { private: { $ne: true } },
        { owner: this.userId }
      ]
    });
  });

Meteor.methods({
  'tasks.insert'(text, dueDate) {
    check(text, String);

    if (!this.userId)
      throw new Meteor.Error('not-authorized');

    const user = Meteor.users.findOne(this.userId);
    const username = user.username || (user.profile ? user.profile.name : "unknown");

    Tasks.insert({
      text,
      createdAt: new Date(),
      private: true,
      owner: this.userId,
      username,
      dueDate
    });
  },
  'tasks.remove'(taskId) {
    check(taskId, String);

    const task = Tasks.findOne(taskId);

    if (!task)
      throw new Meteor.Error('Wrong task\' id');

    if (task.private && task.owner !== this.userId)
      throw new Meteor.Error('not-authorized');

    Tasks.remove(taskId);
  },

  'tasks.setChecked'(taskId, setChecked) {
    check(taskId, String);
    check(setChecked, Boolean);

    const task = Tasks.findOne(taskId);

    if (!task)
      throw new Meteor.Error('Wrong task\' id');

    if (task.private && task.owner !== this.userId)
      throw new Meteor.Error('not-authorized');

    Tasks.update(taskId, { $set: { checked: setChecked } });
  },
  'tasks.setPrivate'(taskId, setToPrivate) {
    check(taskId, String);
    check(setToPrivate, Boolean);

    const task = Tasks.findOne(taskId);

    if (!task)
      throw new Meteor.Error('Wrong task\' id');

    if (task.owner !== this.userId)
      throw new Meteor.Error('not-authorized');

    Tasks.update(taskId, { $set: { private: setToPrivate } });
  },
  'tasks.setText'(taskId, text) {
    check(taskId, String);
    check(text, String);

    if (!this.userId)
      throw new Meteor.Error('not-authorized');

    const task = Tasks.findOne(taskId);

    if (!task)
      throw new Meteor.Error('Wrong task\' id');

    if (task.owner !== this.userId)
      throw new Meteor.Error('not-authorized');

    Tasks.update(taskId, { $set: { text } });
  },
  'tasks.deleteAllOwnTasks'() {
    if (!this.userId)
      throw new Meteor.Error('not-authorized');
    Tasks.remove({ owner: this.userId });
  }
});
