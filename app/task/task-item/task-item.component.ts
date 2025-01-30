import { Component } from '@angular/core';

import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Task } from '../../model/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-item',
  standalone: false,
  
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent implements OnInit{
  tasks!: Array<Task>;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(
      (tasksFromBackend)=>{ this.tasks = tasksFromBackend }
    );
  }
  changeFavorite(number: string, favorite: boolean, i: number){
    this.taskService.changeFavorite(number, favorite).subscribe({
      next: (resp)=>{this.tasks[i].favorite = !this.tasks[i].favorite;},
      
    
      error: (err)=>{alert(err.msg) }
    } )
  }
    
  }




