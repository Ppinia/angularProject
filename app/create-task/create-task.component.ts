import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../model/task';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  standalone: false,
  
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent implements OnInit{
  task!: Task;

  constructor(private taskService: TaskService,
    private router: Router
  ){

  }

  ngOnInit(): void {
      this.task = new Task("","", false);
  }

  createTask(){
    this.taskService.createTask(this.task).subscribe({
      next: (message) => { 
        
        this.task.number = ""
        
        this.task.name = ""

        this.task.favorite = false

        alert("Task created successfully");
        
        this.router.navigate(['/tasks/list'])
      },
      error: (err) => { 
        alert(err.message) 
      },
    })
           
  } 
}
  

