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
  index:number;
  tasks = [];
  remove = [];

  constructor() { 
    this.toDoList = [];
   
  }

  addNewTask(){
    this.toDoList.push({
      id: this.id,
      name: this.name,
      description: this.description});

  }

  deleteTask(toDoList : ToDoList){
    this.index = this.toDoList.indexOf(toDoList);
    this.toDoList.splice(this.index,1);
  }
  

  ngOnInit(): void {
  }

}
