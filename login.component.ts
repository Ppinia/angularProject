import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TaskService } from '../../services/task.service';
import { AuthRequest } from '../../model/auth-request';


@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  authRequest!: AuthRequest;

  constructor(private authService: AuthService,
              private taskService: TaskService
  ){
    this.initializeAuthRequest();
  }

  login() {
    this.authService.login(this.authRequest).subscribe({
      next: (authResponse)=>{ this.authService.setToken("Bearer " + authResponse.token);
                              alert("Login was successful! ");
                              this.taskService.getTasks().subscribe({
                                next: (tasks)=>{ console.log("Tasks: "+tasks) }
                              })
       },
      error: (err)=>{ alert("Login was unsuccessful: " + err.message) }
    })
    
    
  }

  initializeAuthRequest(){
    this.authRequest = {
      username: "",
      password: ""
    }
  }

}
