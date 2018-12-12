import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Task } from '../../models/task.model';
import { TaskWise } from '../../models/taskwise.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private data: any;

  constructor(private http: HttpClient) {
  }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(environment.apiURL + '/Task/All');
  }

  getTaskWiseData(): Observable<TaskWise[]> {
    return this.http.get<TaskWise[]>(environment.apiURL + '/Task/GroupBy/TaskType');
  }
}

