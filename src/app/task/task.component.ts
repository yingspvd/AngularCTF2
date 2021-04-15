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
  OnDelete: EventEmitter<TaskComponent> = new EventEmitter();

  @Output()
  OnSelected: EventEmitter<TaskComponent> = new EventEmitter();
  

  isSelected: boolean;
  isShow: boolean;

  constructor() { 

  }

  ngOnInit(): void {
  }


  deleteTask(){
    this.OnDelete.emit(this);
  }

  show(){
    this.OnSelected.emit(this);
  }

  
}
