import { Meteor } from 'meteor/meteor';
import cron from 'node-cron';
import '../imports/api/tasks';
import '../imports/api/accounts';
import { Tasks } from '../imports/api/tasks';

Meteor.startup(() => {
  cron.schedule('* * * * *', Meteor.bindEnvironment(() => {
    const now = new Date();
    const tasks = Tasks.find({ 'dueDate.date': { $lt: now } }).fetch();
    tasks.forEach(task => {
      if (task.dueDate.date < now)
        Tasks.update(task._id, { $set: { 'dueDate.isTimeUp': true } });
    });

    console.log("UPDATED");
  }));
});
