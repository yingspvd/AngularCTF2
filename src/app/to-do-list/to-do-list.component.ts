import { Component, OnInit,Input, ViewChildren, QueryList } from '@angular/core';
import { ToDoList } from '../models/todollist';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  @ViewChildren(TaskComponent)
  task: QueryList<TaskComponent>;

  toDoList: ToDoList[];

  id : number;
  name : string;
  description : string;
  index:number;

  isShow: boolean;

  constructor() { 
    this.toDoList = [];
   
  }


  
  addNewTask(){
    this.toDoList.push({
      id: this.id,
      name: this.name,
      description: this.description});

  }

  deleteTask(taskComponent : TaskComponent){
    console.log("DELETE");
    this.index = this.toDoList.indexOf(taskComponent.toDoList);
    this.toDoList.splice(this.index,1);
  }
  
  show(taskComponent : TaskComponent){
    console.log("SHOW");
    this.task.forEach(t => {
      t.isSelected = false;
      t.isShow = false;
    })
    taskComponent.isSelected = true;
    taskComponent.isShow = true;
    this.isShow = true;

  }

  ngOnInit(): void {
  }

}
