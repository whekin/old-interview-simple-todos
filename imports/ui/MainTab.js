import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import Task from './Task';
import { Tasks } from '../api/tasks';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

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
    open: false,
    idDelete: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway')
      return;

    Meteor.call('tasks.remove', this.state.idDelete);

    this.setState({
      open: false
    });
  }

  cancelDelete = () => {
    this.setState({
      open: false
    });
  }

  openConfirmDelete = id => {
    this.setState({
      open: true,
      idDelete: id
    });
  }

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
          showPrivateButton={showPrivateButton}
          openConfirmDelete={this.openConfirmDelete} />
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
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={2000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">One deleted</span>}
          action={[
            <Button key="undo" color="secondary" size="small" onClick={this.cancelDelete}>
              UNDO
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleClose}>
              <CloseIcon />
            </IconButton>
          ]}
        />
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
