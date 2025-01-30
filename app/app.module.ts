import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskItemComponent } from './task/task-item/task-item.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { FormsModule } from '@angular/forms';
import { TaskService } from './services/task.service';
import { provideHttpClient, withInterceptors, withFetch, HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthService } from './services/auth.service';
import { taskInterceptorInterceptor } from './services/task-interceptor.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    TaskItemComponent,
    CreateTaskComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    FormsModule
  ],
  providers: [
    TaskService,
    AuthService,
    provideHttpClient(withInterceptors([taskInterceptorInterceptor]),withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
