import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { selectAllTodos$, Task, taskActions, TodoState} from 'store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 tasks$ : Observable< any>=this.store.select(selectAllTodos$).pipe( );

  id: number=0;
  completed: boolean = true;
  form: FormGroup;
  editable: boolean=false;
  newText: string ='';

  constructor(private store:Store) { }



  ngOnInit() { 
    this.initForm()
    this.store.dispatch(taskActions.loadTasks());
  }

addTask(){
  this.id++
  this.completed=!this.completed
  console.log(this.form);
  
  let task :Task={id:this.id,text:this.form.controls.taskValue.value}
    
  this.store.dispatch(taskActions.addTask({task}))
  this.initForm()
}

removeTask(id:number){
  this.store.dispatch(taskActions.removeTask({id}))

}
updateTask(){
this.editable=true;

}



updateTaskText(event:Event){
  const target = event.target as HTMLElement;
    this.newText = target.innerText;
}

okUpdateTask(id:number){
  this.editable=false;
  alert(this.newText)
    this.store.dispatch(taskActions.updateTask({id , newText:this.newText}))

}

initForm(){
this.form=new FormGroup({  
  taskValue : new FormControl(''),
  completed : new FormControl('')
})
}
}
