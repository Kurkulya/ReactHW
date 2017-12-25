import './AddTaskForm.scss';
import React, { Component } from 'react';
import TasksActions from '../Flux/TasksActions';

let index = 0;

class AddTaskForm extends Component {
    constructor (props) {
        super(props);
    }
    handleClick = () => {
        const task = {
            id: ++index,
            content: this.refs.taskContent.value,
            isDone: false
        };
        TasksActions.addTask(task);
    };
    render () {
        return (
            <div className='add-task-form'>
                <label>New Task Content:
                    <input type="text" ref='taskContent'/>
                </label>
                <button onClick={this.handleClick}>Add</button>
            </div>
        );
    }
}

export default AddTaskForm;
