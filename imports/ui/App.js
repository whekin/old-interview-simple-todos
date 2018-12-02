import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Tasks } from '../api/tasks';
import Bar from './Bar.js';
import MainTab from './MainTab';
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
          <MainTab />
        </div>
      </div>
    </div>
    );
  }
}

export default withTracker(() => {
  return {
    currentUser: Meteor.user()
  };
})(App);
