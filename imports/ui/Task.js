import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { ListItem, IconButton, Checkbox, Tooltip } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import CheckCircleIconOutline from '@material-ui/icons/CheckCircleOutline';
import CheckCirleIcon from '@material-ui/icons/CheckCircle';
import PublicIcon from '@material-ui/icons/Public';

export default class Task extends Component {
  toggleChecked = () => {
    Meteor.call('tasks.setChecked', this.props.task._id, !this.props.task.checked);
  }

  deleteThisTask = () => {
   Meteor.call('tasks.remove', this.props.task._id);
  }
  
  togglePrivate = () => {
    Meteor.call('tasks.setPrivate', this.props.task._id, !this.props.task.private);
  }

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
              icon={<CheckCircleIconOutline />}
              checkedIcon={<CheckCirleIcon />} />
          </div>)
          : ''
          }
          <div className="task__text">
            <div>
              <strong>{this.props.task.username}</strong>: {this.props.task.text}
            </div>
          </div>
          {
            this.props.showPrivateButton
            ? (
              <div className="task__ins">
                <Tooltip title="make this public">
                  <Checkbox
                    readOnly
                    onClick={this.togglePrivate}
                    checked={!this.props.task.private}
                    icon={<PublicIcon />}
                    checkedIcon={<PublicIcon color="secondary" />} />
                </Tooltip>
                
                <Tooltip title="delete">
                  <IconButton aria-label="Delete" onClick={this.deleteThisTask}>
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Tooltip> 
              </div> )
            : ''
          }
        </div>
      </ListItem>
    );
  }
}
