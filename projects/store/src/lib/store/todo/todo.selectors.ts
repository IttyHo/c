import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { TodoState } from './todo.state';
import { Task } from './todo.state';

export const taskFeatureSelector: MemoizedSelector<object, TodoState>  = createFeatureSelector<TodoState>('todos');

export const selectAllTodos$ : MemoizedSelector<object, Task[]> =
createSelector(
   taskFeatureSelector,
     ({tasks}) => tasks );
