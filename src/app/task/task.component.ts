import { Component, Input,Output, OnInit,EventEmitter } from '@angular/core';
import { ToDoList } from '../models/todollist';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input()
  toDoList: ToDoList;
  
  @Output()
  OnSelected: EventEmitter<ToDoList> = new EventEmitter();

  
  constructor() { 

  }

  ngOnInit(): void {
  }


  deleteTask(){
    this.OnSelected.emit(this.toDoList);
  }

  
}
