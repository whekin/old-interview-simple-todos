import React, { Component } from 'react';
import { ReactHeight } from 'react-height';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import {
  ListItem,
  IconButton,
  Checkbox,
  Tooltip,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  Chip
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

/*
 import {
  PanoramaFishEye,
  CheckCirleIcon,
  PublicIcon,
  InfoIcon,
  MenuIcon,
  EditIcon,
  DeleteIcon
} from '@material-ui/icons';
 */

import PanoramaFishEye from '@material-ui/icons/PanoramaFishEye';
import CheckCirleIcon from '@material-ui/icons/CheckCircle';
import PublicIcon from '@material-ui/icons/Public';
import InfoIcon from '@material-ui/icons/Info';
import MenuIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = () => ({
  zIndex: {
    zIndex: 100
  },
  listItem: {
    paddingLeft: 0,
    paddingRight: 0
  },
  chip: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  dueDate: {
    backgroundColor: '#e57373'
  }
});

class Task extends Component {
  state = {
    open: false,
    height: "0px"
  }

  toggleChecked = () => {
    Meteor.call('tasks.setChecked', this.props.task._id, !this.props.task.checked);
  }

  deleteThisTask = () => {
    Meteor.call('tasks.remove', this.props.task._id);
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
    if (this.anchorEl.contains(event.target))
      return;


    this.setState({ open: false });
  };

  handleInfo = () => {
    const { dueDate } = this.props.task;

    if (dueDate)
      alert(moment(dueDate).fromNow());
    else
      alert("Date of due task isn't indicated");
  }

  render() {
    const { classes, task } = this.props;
    return (
      <div style={{ height: this.state.height }}>
        <ReactHeight onHeightReady={height => {
          this.setState({ height });
        }}>
          <ListItem
            className={classes.listItem}
            divider={true}>

            <div className="task">
              {
                this.props.showPrivateButton
                  ? (
                    <div className="task__main">
                      <Checkbox
                        readOnly
                        checked={Boolean(this.props.task.checked)}
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
                { task.dueDate ?
                  <div className="task__dueDate">
                    <Chip
                      className={
                        task.dueDate < new Date() ?
                          classes.dueDate :
                          ""
                      }
                      label={moment(task.dueDate).calendar()}/>
                  </div>
                  : ""
                }
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
                        aria-owns={this.state.open ? 'menu-list-grow' : null}
                        aria-haspopup="true">
                        <MenuIcon fontSize="small" />
                      </IconButton>
                    </div> )
                  : (
                    <div className="task__ins">
                      <Tooltip title={`user: ${task.username}`}>
                        <IconButton>
                          <InfoIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </div> )
              }
            </div>
            <Popper
              className={classes.zIndex}
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
                                `date: ${moment(this.props.task.createdAt).format('DD:MM:YY')}`}</div>
                              <div>
                                {`time: ${moment(this.props.task.createdAt).format('h:mm:ss')}`}
                              </div>
                            </div>
                          }>
                            <IconButton
                              onClick={this.handleInfo}>
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
        </ReactHeight>
      </div>
    );
  }
}

export default withStyles(styles)(Task);
