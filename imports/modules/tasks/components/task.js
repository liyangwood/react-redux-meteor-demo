import React, { Component, PropTypes } from 'react';
import {
  Button,
} from 'react-bootstrap';
import { OPTION } from '../constants/tasks';

const Task = (props) => {
  const { removeTask } = props
  const handleRemoveTask = (taskId, e) => {
    e.preventDefault();
    removeTask(taskId);
  }
  const {text, _id, priority} = props.task;
  return (
    <li>{text} - ({OPTION.priority[priority-1].name})<Button bsStyle="danger" style={{float: "right"}}
                       onClick={handleRemoveTask.bind(this, _id)}> Remove Task </Button></li>
  );
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
};

export default Task
