import { Component, WritableSignal, effect, signal } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
 tasks: WritableSignal<Task[]> = signal(
  localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')!) : []
 );
 // tasks: Task[] =[] //forma tradicional
  
 constructor(){
  effect(() =>{
    console.log(`Tenemos ${this.tasks().length} tareas`)
    localStorage.setItem('tasks', JSON.stringify(this.tasks()))
  })
 }
 

 onSubmit(formValue: Task){
   // this.task.push(formValue) forma tradicional
   this.tasks.mutate( tasks => {
      tasks.push(formValue);
   })
    console.log(formValue)
  }

  onRemove(index: number){
    //this.tasks.splice(index,1) // Forma tradicional
    this.tasks.mutate( task => {
    task.splice(index,1)}
    
  )}

}
