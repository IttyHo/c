import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, tap } from 'rxjs/operators';
import { taskActions} from './todo.actions';

@Injectable({
  providedIn: 'root'
})
export class TodoEffects {
  constructor(private actions$: Actions) {
    
    this.actions$.subscribe(action => {
      console.log('Action received in effects:', action);
    });
  }

  loadTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(taskActions.loadTasks),
      map(() => taskActions.loadTasksSuccess())
    );
  });

  addTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(taskActions.addTask),
        map(_ => taskActions.loadTasksSuccess())
      )})  
     
removeTask$ = createEffect(() => {
  return this.actions$.pipe(
    ofType(taskActions.removeTask),
      map(_ => taskActions.loadTasksSuccess())
    )})  
updateTask$ = createEffect(() => {
  return this.actions$.pipe(
    ofType(taskActions.updateTask),
      map(_ => taskActions.loadTasksSuccess())
    )})  
} 