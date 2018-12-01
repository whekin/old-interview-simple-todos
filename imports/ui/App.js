import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Tasks } from '../api/tasks';
import Bar from './Bar.js';
import Task from './Task.js';
import { TextField, List} from '@material-ui/core';
 
// App component - represents the whole app
class App extends Component {
  state = {
    hideCompleted: false,
    taskValue: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();

    Meteor.call('tasks.insert', this.state.taskValue.trim());

    this.setState({
      taskValue: ""
    });
  }

  toggleHideCompleted = () => {
    this.setState({
      hideCompleted: !this.state.hideCompleted
    });
  }

  renderTasks() {
    let filteredTasks = this.props.tasks;
    if (this.state.hideCompleted)
      filteredTasks = filteredTasks.filter(task => !task.checked);
    
    return filteredTasks.map(task => {
      const currentUserId = this.props.currentUser && this.props.currentUser._id;
      const showPrivateButton = task.owner === currentUserId;
      return (
        <Task
          key={task._id}
          task={task}
          showPrivateButton={showPrivateButton} />
      );
    });
  }
 
  render() {
    return (
      <div className="container">
        <header>
          <Bar
            toggleHideCompleted={this.toggleHideCompleted}
            hideCompleted={this.state.hideCompleted} />
        </header>
      <div className="wrapper">
        { this.props.currentUser ?
          <form
            className="new-task"
            onSubmit={this.handleSubmit}>
            <TextField
              label="New task"
              placeholder="Type to add a new task"
              helperText="Just do it!"
              fullWidth
              margin="normal"
              variant="filled"
              onChange={this.handleChange}
              value={this.state.taskValue}
              autoComplete="off"
              name="taskValue"
              InputLabelProps={{
                shrink: true,
              }} />
            </form> : ''
          }
          <div className="tasks">
            <List>
              {this.renderTasks()}
            </List>
          </div>
        </div>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('tasks');

  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
    currentUser: Meteor.user()
  };
})(App);
