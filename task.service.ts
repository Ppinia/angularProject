import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../model/task';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService implements OnInit {

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    
  }

  getTasks():Observable<Task[]>{
    return this.http.get<Task[]>('/api/task');
  }

  createTask(t: Task):Observable<any>{
    return this.http.post('/api/task', t);
  }

  changeFavorite(i: number){
    
  }






}
