import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import Task from './Task';
import { Tasks } from '../api/tasks';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Tabs,
  Tab,
  List,
  Typography
} from '@material-ui/core';

const TabContainer = ({ children }) => (
  <Typography component="div" style={{ padding: 8 * 3 }}>
    {children}
  </Typography>
);

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = () => ({
  root: {
    width: "100%"
  },
  list: {
    padding: 5,
    paddingTop: 10,
    paddingBottom: 200
  }
});

class FullWidthTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  renderTasks(settings) {
    let filteredTasks = this.props.tasks;
    const currentUserId = this.props.currentUser && this.props.currentUser._id;

    if (this.props.hideCompleted && settings.sort !== "completed")
      filteredTasks = filteredTasks.filter(task => !task.checked);
    if (settings.sort === "own" || settings.sort === "completed")
      filteredTasks = filteredTasks.filter(task => task.owner === currentUserId);
    if (settings.sort === "completed")
      filteredTasks = filteredTasks.filter(task => task.checked === true);
    else if (settings.sort === "public")
      filteredTasks = filteredTasks.filter(task => task.private !== true);

    return filteredTasks.map(task => {
      const showPrivateButton = task.owner === currentUserId;

      return (
        <CSSTransition
          timeout={700}
          classNames="fade"
          key={task._id}>
          <Task showPrivateButton={showPrivateButton} task={task} />
        </CSSTransition>
      );
    });
  }

  tabElRender(type) {
    return (
      <List className={this.props.classes.list}>
        <TransitionGroup>
          {this.renderTasks({
            sort: type
          })}
        </TransitionGroup>
      </List>
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth>
            <Tab label="My tasks" />
            <Tab label="Completed" />
            <Tab label="Public tasks" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}>
          {this.tabElRender("own")}
          {this.tabElRender("completed")}
          {this.tabElRender("public")}
        </SwipeableViews>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withTracker(() => {
  Meteor.subscribe('tasks');

  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
    currentUser: Meteor.user()
  };
})(FullWidthTabs));
