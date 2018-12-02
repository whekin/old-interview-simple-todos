import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

Meteor.methods({
  "deleteUserAccount"(userId) {
    Meteor.users.remove({ _id: Meteor.userId() });
  }
})