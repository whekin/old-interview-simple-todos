import React, { Component } from 'react';
import { Tasks } from '../api/tasks';

// Task component - represents a single todo item
export default class Task extends Component {
  toggleChecked = () => {
    Tasks.update(this.props.task._id, {
      $set: { checked: !this.props.task.cheded }
    });
  }

  deleteThisTask = () => {
    Tasks.remove(this.props.task._id);
  }
  
  render() {
    const taskClassName = this.props.task.checked ? 'checked' : '';

    return (
      <li className={taskClassName}>
        <button className="delete" onClick={this.deleteThisTask}>
          &times;
        </button>

        <input
          type="checkbox"
          readOnly
          checked={!!this.props.task.checked}
          onClick={this.toggleChecked} />

        <span className="text">{this.props.task.text}</span>
      </li>
    );
  }
}
