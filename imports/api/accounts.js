import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

console.log("I am. (accounts.js)");

Meteor.methods({
  "deleteUserAccount"() {
    Meteor.users.remove({ _id: this.userId });
  }
});