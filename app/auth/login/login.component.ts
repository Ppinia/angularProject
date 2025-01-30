import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AuthRequest } from '../../model/auth-request';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  authRequest!: AuthRequest;

  constructor(private authService: AuthService,
    private router: Router
              
  ){
    this.initializeAuthRequest();
  }

  login() {
    this.authService.login(this.authRequest).subscribe({
      next: (authResponse)=>{ 
        alert("Login was successful");
        this.authService.setToken("Bearer " + authResponse.token);
        this.router.navigate(['/tasks/list']);
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
