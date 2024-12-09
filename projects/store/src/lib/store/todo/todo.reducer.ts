import { createReducer, on } from '@ngrx/store';
import { TodoState } from './todo.state';
import { taskActions} from './todo.actions';

export const todoReducer = createReducer(
 new TodoState(),
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
    tasks: [...state.tasks, task] // דחיפת הנתון החדש למערך

   })),
  on(taskActions.removeTask, (state, { id }) => ({
    ...state,
    tasks: state.tasks.filter(task => task.id !== id)
  }))
); 
