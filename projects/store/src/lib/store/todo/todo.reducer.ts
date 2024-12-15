import { createReducer, on } from '@ngrx/store';
import { TodoState } from './todo.state';
import { taskActions} from './todo.actions';
import { initialState } from './todo.state';

export const todoReducer = createReducer(
initialState, 
  on(taskActions.loadTasks, state => ({
    ...state,
    loading: true
  })),
  on(taskActions.loadTasksSuccess, (state) => ({
    ...state,
    loading: false,
  })),
  on(taskActions.loadTasksFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(taskActions.addTask, (state, { task }) => ({
    ...state,
    tasks: [...state.tasks, task] 

   })),
  on(taskActions.removeTask, (state, { id }) => ({
    ...state,
    tasks: state.tasks.filter(task => task.id !== id)
  })),
  on(taskActions.updateTask, (state, { id,newText }) => {
    const taskExists = state.tasks.some(task => task.id === id);
    if (!taskExists) {
      alert("not exists")
      return state; 
    }
    return {
      ...state,
      tasks: state.tasks.map(task =>
        task.id === id
          ? { ...task, text: newText } 
          : task 
      )
    };
  })
);
