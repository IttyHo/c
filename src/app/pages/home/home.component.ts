import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { selectAllTodos$, Task, taskActions, TodoState} from 'store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 tasks$ : Observable< any>=this.store.select(selectAllTodos$).pipe(
  // tap(ans=>alert(ans)),
  // tap(ans=>alert(typeof(ans))),
  // map(ans=>Object.entries(ans)),
  // tap(ans=>alert(ans)),

  // tap(ans=>alert(typeof(ans))),

 );
  id: any;

  constructor(private store:Store) { }



  ngOnInit() {
    this.store.dispatch(taskActions.loadTasks());

  }

addTask(){
  this.id++
  let task :Task={id:this.id,text:"my first task",completed:true}
  this.store.dispatch(taskActions.addTask({task}))
}


}
