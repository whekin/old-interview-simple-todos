import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountsUIWrapper from './AccountsUIWrapper';
import { InputLabel, Checkbox } from '@material-ui/core'

const styles = {
  root: {
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
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Todos
            </Typography>
            <InputLabel className={classes.margin}>
                <Checkbox
                  readOnly
                  checked={this.props.hideCompleted}
                  onClick={() => {this.props.toggleHideCompleted()}} />
                Hide Completed Tasks
            </InputLabel>
            <AccountsUIWrapper />
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