import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { TodoState } from './todo.state';
import { Task } from 'store';

export const taskFeatureSelector: MemoizedSelector<object, TodoState>  = createFeatureSelector<TodoState>('todos');

export const selectAllTodos$ : MemoizedSelector<object, Task[]> =
createSelector(
   taskFeatureSelector,
     ({tasks}) => tasks );




// export const selectTodoLoading = createSelector(
//   selectTodoState,
//   (state: TodoState) => state
// ); 