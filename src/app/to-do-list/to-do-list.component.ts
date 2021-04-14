import { Component, OnInit,Input } from '@angular/core';
import { ToDoList } from '../models/todollist';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  @Input()
  toDoList: ToDoList[];

  id : number;
  name : string;
  description : string;
  tasks = [];
  index: number;
  val = 1;

  constructor() { 
    this.toDoList = [];
  }

  addNewTask(){
    this.toDoList.push({
      id: this.id,
      name: this.name,
      description: this.description});
    
  }

  addTask(){
     this.tasks.push(this.id);
     this.index = this.tasks.indexOf(this.id,0)
     console.log(this.index);
  }

  deleteTask(index){
    this.toDoList.splice(index,1);
  }
  

  ngOnInit(): void {
  }

}
