import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import Bar from './Bar.js';
import Settings from './Settings.js';
import MainTab from './MainTab';
import { TextField, Typography } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { parser } from '../../imports/ui/parser';
import 'moment/locale/ru';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#263238'
    },
    secondary: {
      main: '#2196f3'
    }
  }
});

class App extends Component {
  state = {
    hideCompleted: false,
    taskValue: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const dueDate = parser(this.state.taskValue);

    if (dueDate && dueDate.isOnlyDate) {
      window.alert("The date only entered");
      return;
    }

    Meteor.call('tasks.insert', this.state.taskValue.trim(), dueDate && {
      date: dueDate.date,
      isWholeDay: dueDate.isWholeDay,
      isTimeUp: false
    });

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
      <MuiThemeProvider theme={theme}>
        <div className="App container">
          <header>
            <Bar />
          </header>
          <div className="wrapper">
            { this.props.currentUser ?
              <form
                className="new-task"
                onSubmit={this.handleSubmit}>
                <TextField
                  label="New task"
                  placeholder="Type to add a new task"
                  fullWidth
                  margin="normal"
                  variant="filled"
                  onChange={this.handleChange}
                  value={this.state.taskValue}
                  autoComplete="off"
                  name="taskValue"
                  InputLabelProps={{
                    shrink: true
                  }} />
              </form> : ''
            }
            <div className="tasks">
              {this.props.currentUser ?
                <MainTab hideCompleted={this.state.hideCompleted}/>
                : <Typography>Please, sign in.</Typography>
              }
            </div>
            <Settings
              toggleHideCompleted={this.toggleHideCompleted}
              hideCompleted={this.state.hideCompleted} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(withTracker(() => ({
  currentUser: Meteor.user()
}))(App));
