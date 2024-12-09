import { createAction, props } from '@ngrx/store';
import { Task } from './todo.state';



export const taskActions = {
  addTask: createAction('[Todo] Add Task', props<{ task: Task }>()),
  removeTask: createAction('[Todo] Remove Task', props<{ id: number }>()),
  loadTasks: createAction('[Todo] Load Tasks'),
  loadTasksSuccess: createAction('[Todo] Load Tasks success'),
  loadTasksFailure: createAction('[Todo] Load Tasks failure', props<{ error: any }>())
}
