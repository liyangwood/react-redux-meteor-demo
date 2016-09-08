import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import {
  Button,
  ButtonToolbar,
  FormGroup,
  InputGroup,
  FormControl
} from 'react-bootstrap';
import Task from '../containers/task';
import TaskInput from '../containers/TaskInput';

const App = class extends Component {
  render() {
    const { tasks, addTask } = this.props

    const renderTasks = () => {
      return (tasks||[]).map((task) => (
        <Task key={task._id} task={task} />
      ));
    }

    return (
      <div className="container">
        <header>
          <h1>Todo List ({(tasks ||[] ).length})</h1>
        </header>
        <TaskInput addButtonCallback={addTask} />

        <ul>
          {renderTasks()}
        </ul>
      </div>
    );
  }


}

export default App
