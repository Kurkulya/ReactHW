import {ADD_TASK, TOGGLE_TASK_STATE} from './TasksActions';
import Dispatcher from './Dispatcher';
import { EventEmitter } from 'events';

let tasks = [];

class TasksStore extends EventEmitter {
    constructor () {
        super();
        this.dispatchToken = Dispatcher.register(this.dispatcherCallback.bind(this));
    }
    emitChange (eventName) {
        this.emit(eventName);
    }
    getTasks () {
        return tasks;
    }
    addTask (task) {
        tasks.push(task);
    }
    toggleTaskState (taskId) {
        tasks = tasks.map(task => task.id !== taskId
            ? task
            : {
                content: task.content,
                id: task.id,
                isDone: !task.isDone
            });
    }
    addChangeListener (eventName, callback) {
        this.on(eventName, callback);
    }
    removeChangeListener (eventName, callback) {
        this.removeListener(eventName, callback);
    }
    dispatcherCallback (action) {
        switch (action.actionType) {
        case ADD_TASK:
            this.addTask(action.value);
            break;
        case TOGGLE_TASK_STATE:
            this.toggleTaskState(action.value);
            break;
        }
        this.emitChange('STORE_' + action.actionType);
        return true;
    }
}

export default new TasksStore();
