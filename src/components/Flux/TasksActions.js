import Dispatcher from './Dispatcher';

export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK_STATE = 'TOGGLE_TASK_STATE';

class TasksActions {
    addTask (task) {
        Dispatcher.dispatch({
            actionType: ADD_TASK,
            value: task
        });
    }
    toggleTaskState (taskId) {
        Dispatcher.dispatch({
            actionType: TOGGLE_TASK_STATE,
            value: taskId
        });
    }
}

export default new TasksActions();
