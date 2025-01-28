import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../model/task';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-create-task',
  standalone: false,
  
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent implements OnInit{
  task!: Task;

  constructor(private taskService: TaskService){

  }

  ngOnInit(): void {
      this.task = new Task("","");
  }

  createTask(){
    this.taskService.createTask(this.task).subscribe(
      (message)=>{ 
        alert(message.msg); 
        this.task.number = "";
        
        this.task.name = "";
        
        location.reload();
      },
      (error)=>{ alert(error.message) }
    );
  }


}
