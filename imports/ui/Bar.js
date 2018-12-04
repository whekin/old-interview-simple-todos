import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AccountsControl from './AccountsControl';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import {
  Typography
} from '@material-ui/core';

const styles = {
  bar: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1,
  }
};

class Bar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.bar}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Todo List
            </Typography>
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