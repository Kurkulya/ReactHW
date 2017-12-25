import './Tasks.scss';
import {ADD_TASK, TOGGLE_TASK_STATE} from '../Flux/TasksActions';
import React, { Component } from 'react';
import _ from 'lodash';
import AddTaskForm from '../AddTaskFrom/AddTaskForm';
import Task from '../Task/Task';
import TasksStore from '../Flux/TasksStore';

class Tasks extends Component {
    constructor (props) {
        super(props);
        this.state = {
            tasks: []
        };
    }
    componentDidMount () {
        TasksStore.addChangeListener('STORE_' + ADD_TASK, this.updateState);
        TasksStore.addChangeListener('STORE_' + TOGGLE_TASK_STATE, this.updateState);
    }
    updateState = () => {
        this.setState({
            tasks: TasksStore.getTasks()
        });
    };
    render () {
        return (
            <div className='tasks'>
                <AddTaskForm/>
                {_.map(this.state.tasks, task =>
                    <Task key={task.id} task={task}/>
                )}
            </div>
        );
    }
}

export default Tasks;
