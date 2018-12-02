import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { ListItem, IconButton, Checkbox, Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete'
import CheckCircleIconOutline from '@material-ui/icons/CheckCircleOutline';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import PanoramaFishEye from '@material-ui/icons/PanoramaFishEye'
import CheckCirleIcon from '@material-ui/icons/CheckCircle';
import PublicIcon from '@material-ui/icons/Public';
import InfoIcon from '@material-ui/icons/Info';
import MenuIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';

const styles = theme => ({
  zIndex: {
    zIndex: 100
  }
});

class Task extends Component {
  state = {
    open: false
  }

  toggleChecked = () => {
    Meteor.call('tasks.setChecked', this.props.task._id, !this.props.task.checked);
  }

  deleteThisTask = () => {
    this.props.openConfirmDelete(this.props.task._id);
  }
  
  editThisTask = () => {
    const newText = window.prompt("Edit the task", this.props.task.text);
    if (newText)
      Meteor.call('tasks.setText', this.props.task._id, newText);
  }

  togglePrivate = () => {
    Meteor.call('tasks.setPrivate', this.props.task._id, !this.props.task.private);
  }

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    return (
      <ListItem divider={true}>
        <div className="task">
        {
          this.props.showPrivateButton
          ? (
          <div className="task__main">
            <Checkbox
              readOnly
              checked={!!this.props.task.checked}
              onClick={this.toggleChecked}
              icon={<PanoramaFishEye />}
              checkedIcon={<CheckCirleIcon />} />
          </div>)
          : ''
          }
          <div className="task__text">
            <div>
              {this.props.task.text}
            </div>
          </div>
          {
            this.props.showPrivateButton
            ? (
              <div className="task__ins">
                <IconButton
                   buttonRef={node => {
                    this.anchorEl = node;
                  }}
                  onClick={this.handleToggle}
                  aria-owns={this.state.open ? 'menu-list-grow' : undefined}
                  aria-haspopup="true">
                  <MenuIcon fontSize="small" />
                </IconButton>
              </div> )
            : (
            <div className="task__ins">
              <Tooltip title={`user: ${this.props.task.username}`}>
                <IconButton onClick={() => {}}>
                  <InfoIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </div> )
          }
        </div>
        <Popper
          className={this.props.classes.zIndex}
          open={this.state.open}
          anchorEl={this.anchorEl}
          transition
          disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
              <Paper>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList>
                    <MenuItem>
                      <Tooltip title={
                        <div>
                          <div>{
                            `date: ${this.props.task.createdAt.getDate()}.
                            ${this.props.task.createdAt.getMonth()}.
                            ${this.props.task.createdAt.getFullYear()}
                          `}</div>
                          <div>
                            {`time: ${this.props.task.createdAt.getHours()}:${this.props.task.createdAt.getMinutes()}`}
                          </div>
                        </div>
                      }>
                        <IconButton
                          onClick={() => {}}>
                          <InfoIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </MenuItem>
                    <MenuItem >
                    <Tooltip title="make this public">
                      <Checkbox
                        readOnly
                        onClick={this.togglePrivate}
                        checked={!this.props.task.private}
                        icon={<PublicIcon />}
                        checkedIcon={<PublicIcon color="secondary" />} />
                      </Tooltip>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                      <Tooltip title="edit">
                        <IconButton onClick={this.editThisTask}>
                          <EditIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                      <Tooltip title="delete">
                        <IconButton onClick={this.deleteThisTask}>
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </ListItem>
    );
  }
}

export default withStyles(styles)(Task);
