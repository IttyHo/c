import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, tap } from 'rxjs/operators';
import { taskActions} from './todo.actions';

@Injectable({
  providedIn: 'root'
})
export class TodoEffects {
  constructor(private actions$: Actions) {
    // alert('TodoEffects constructor called!!!');
    
    // נוסיף subscription לדיבאג
    this.actions$.subscribe(action => {
      console.log('Action received in effects:', action);
    });
  }

  loadTodos$ = createEffect(() => {
    // console.log('Setting up loadTodos$ effect');
    return this.actions$.pipe(
      // tap(action => console.log('Action in pipe:', action)),
      ofType(taskActions.loadTasks),
      // tap(() => alert('loadTodos action caught')),
      map(() => taskActions.loadTasksSuccess())
    );
  });

  addTask$ = createEffect(() => {
    // console.log('Setting up addTask$ effect');
    return this.actions$.pipe(
      // tap(action => console.log('Action in pipe:', action)),
      ofType(taskActions.addTask),
      // tap(() => alert('addTask action caught')),
        map(_ => taskActions.loadTasksSuccess())
      )})  
     
removeTask$ = createEffect(() => {
  // console.log('Setting up addTask$ effect');
  return this.actions$.pipe(
    // tap(action => console.log('Action in pipe:', action)),
    ofType(taskActions.removeTask),
    // tap(() => alert('addTask action caught')),
      map(_ => taskActions.loadTasksSuccess())
    )})  
updateTask$ = createEffect(() => {
  return this.actions$.pipe(
    ofType(taskActions.updateTask),
      map(_ => taskActions.loadTasksSuccess())
    )})  
} 