import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { TaskItemComponent } from './task/task-item/task-item.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
  
    { path: 'tasks/list', component: TaskItemComponent, canActivate: [authGuard] },
    { path: 'tasks/create', component: CreateTaskComponent, canActivate: [authGuard] },
    { path: '**', redirectTo: 'login' }
  ];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
