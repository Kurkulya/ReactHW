import './Task.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TasksActions from '../Flux/TasksActions';

class Task extends Component {
    constructor (props) {
        super(props);
    }
    handleCheckBoxChange = () => {
        TasksActions.toggleTaskState(this.props.task.id);
    };
    render () {
        return (
            <div className='task'>
                <input type='checkbox' onChange={this.handleCheckBoxChange} defaultValue={this.props.task.isDone}/>
                {this.props.task.isDone
                    ? <del>{this.props.task.id}: {this.props.task.content}</del>
                    : <span>{this.props.task.id}: {this.props.task.content}</span>}
            </div>
        );
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
};

export default Task;
