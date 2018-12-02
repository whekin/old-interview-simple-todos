import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AccountsControl from './AccountsControl';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import {
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Switch
} from '@material-ui/core';

import SettingsIcon from '@material-ui/icons/Settings';

const styles = {
  dialog: {
    width: 250
  },
  bar: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1,
  },
  margin: {
    marginRight: 15
  }
};

class Bar extends Component {
  state = {
    checked: ["sort"],
    open: false
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  handleClick = () => {
    this.setState({
      open: true
    });
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    }, () => {
      if (value.indexOf('hide') !== -1)
        this.props.toggleHideCompleted();
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.bar}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Todo List
            </Typography>
            <IconButton
              aria-haspopup="true"
              onClick={this.handleClick}>
                <SettingsIcon />
            </IconButton>
            <Dialog
              onClose={this.handleClose}
              aria-labelledby="simple-dialog-title"
              open={this.state.open}>
              <DialogTitle id="simple-dialog-title">Settings</DialogTitle>
              <div className={classes.dialog}>
                <List>
                  <ListItem>
                    <ListItemText primary="Hide Completed Tasks" />
                    <ListItemSecondaryAction>
                      <Switch
                        onChange={this.handleToggle('hide')}
                        checked={this.props.hideCompleted} />
                    </ListItemSecondaryAction>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Sort by date" />
                    <ListItemSecondaryAction>
                      <Switch
                        disabled
                        onChange={this.handleToggle('sort')}
                        checked={this.state.checked.indexOf('sort') !== -1} />
                    </ListItemSecondaryAction>
                  </ListItem>
                </List>
              </div>
            </Dialog>
            <AccountsControl />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Bar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bar);