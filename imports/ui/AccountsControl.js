import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import {
  TextField,
  FormControl,
  Input,
  InputLabel,
  InputAdornment,
  IconButton,
  Button,
  Popover,
  List,
  ListItem
} from '@material-ui/core';
import {
  Visibility,
  VisibilityOff,
  AccountCircle
} from '@material-ui/icons/';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  rightIcon: {
    marginLeft: 7
  },
  redText: {
    color: "#F44336"
  }
});

class AccountsControl extends Component {
  state = {
    name: "",
    password: "",
    showPassword: false,
    anchorEl: null
  }

  clearForm() {
    this.setState({
      name: "",
      password: "",
      showPassword: false
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    Meteor.loginWithPassword(this.state.name, this.state.password, err => {
      if (err)
        alert(err.reason);
      else {
        this.handleClose();
        this.clearForm();
      }
    });
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  }

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  handleLogout = () => {
    this.handleClose();
    Meteor.logout();
  }

  handleSubmitSignUp = event => {
    event.preventDefault();

    Accounts.createUser({
      username: this.state.name,
      password: this.state.password,
    }, err => {
      if (err)
        alert(err.reason);
      else {
        this.handleClose();
        this.props.history.push("/");
      }
    });

    this.clearForm();
  }

  handleLoginWithGoogle = () => {
    Meteor.loginWithGoogle({
      client_id: "1056331276070-ddri14rdi942kqjcu5g8dpmd30l9dev5.apps.googleusercontent.com",
      client_secret: "wVnPrDmR_w9XCGqt93QWD3uv"
    });
  }

  handleDeleteAccount = () => {
    Meteor.call('tasks.deleteAllOwnTasks');
    Meteor.call('deleteUserAccount');
    
    this.handleLogout();
  }

  handleSignUp = () => {
    this.props.history.push("/signup");
  }

  logIn = () => (
    <div>
      <Route exact path="/" render={() => (
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <TextField
            label="Name"
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal" />
          <FormControl>
            <InputLabel htmlFor="adornment-password">Password</InputLabel>
            <Input
              id="adornment-password"
              type={this.state.showPassword ? 'text' : 'password'}
              value={this.state.password}
              onChange={this.handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}>
                    {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button variant="contained" type="submit">
            Log in
          </Button>
          
          <Button variant="outlined" onClick={this.handleSignUp}>
            Create new account
          </Button>
          
          <Button variant="outlined" onClick={this.handleLoginWithGoogle}>
            Sign in with google
          </Button>
        </form>
      )} />

      <Route path="/signup" render={() => (
        <form onSubmit={this.handleSubmitSignUp} autoComplete="off">
          <TextField
            label="Name"
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal" />
          <FormControl>
            <InputLabel htmlFor="adornment-password">Password</InputLabel>
            <Input
              id="adornment-password"
              type={this.state.showPassword ? 'text' : 'password'}
              value={this.state.password}
              onChange={this.handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}>
                    {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button variant="contained" type="submit">
            Sign Up
          </Button>
        </form>
      )} />
    </div>
  );

  show = () => {
    if (Meteor.user())
      return (
        <div>
          <List>
            <ListItem>
              <Button
                fullWidth
                onClick={this.handleLogout}
                variant="contained">
                Log out
              </Button>
            </ListItem>
            <ListItem>
              <Button
                fullWidth
                onClick={this.handleDeleteAccount}
                className={this.props.classes.redText}
                variant="text">
                Delete this account
              </Button>
            </ListItem>
          </List>
        </div>
      )
    else
      return this.logIn();
  }

  render() {
    const classes = this.props.classes;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const currentUser = Meteor.user();
    let username = "login";
    if (currentUser) {
      username = currentUser.username;
      console.log(Meteor.users.findOne(currentUser._id));
      if (false)
        username = currentUser.services.google.given_name;
    }
    
    return (
      <div>
        <Button
          aria-owns={open ? 'simple-popper' : undefined}
          aria-haspopup="true"
          variant="text"
          onClick={this.handleClick}>
          {username}
          <AccountCircle className={classes.rightIcon} />
        </Button>
        <Popover
          id="simple-popper"
          open={open}
          anchorEl={anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}>
          <div className="AccountsControl">
            {this.show()}
          </div>
        </Popover>
      </div>
    );
  }
}

export default withRouter(
  withStyles(styles)(AccountsControl)
);