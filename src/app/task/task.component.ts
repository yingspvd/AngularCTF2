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
  OnSelected: EventEmitter<TaskComponent> = new EventEmitter();

  
  constructor() { 

  }

  deleteTask(){
    this.OnSelected.emit(this);
  }

  ngOnInit(): void {
  }

}
