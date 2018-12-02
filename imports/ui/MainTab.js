import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import Task from './Task';
import { Tasks } from '../api/tasks';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';

function TabContainer({ children }) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    width: "100%"
  },
});

class FullWidthTabs extends React.Component {
  state = {
    value: 0,
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
    if (settings.sort === "own")
      filteredTasks = filteredTasks.filter(task => task.owner === currentUserId);
    else if (settings.sort === "completed")
      filteredTasks = filteredTasks.filter(task => task.checked === true);
    else if (settings.sort === "public")
      filteredTasks = filteredTasks.filter(task => task.private !== true);

    return filteredTasks.map(task => {
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
          <TabContainer>
            <List>
              {this.renderTasks({
                sort: "own"
              })}
            </List>
           
          </TabContainer>
          <TabContainer>
            <List>
              {this.renderTasks({
                sort: "completed"
              })}
            </List>
          </TabContainer>
          <TabContainer>
            <List>
              {this.renderTasks({
                sort: "public"
              })}
            </List>
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withTracker(() => {
  Meteor.subscribe('tasks');

  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
    currentUser: Meteor.user()
  };
})(FullWidthTabs));
