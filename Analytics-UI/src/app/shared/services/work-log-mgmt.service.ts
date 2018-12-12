import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { WorkLog } from '../../models/worklog.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkLogMgmtService {
  private data: any;

  constructor(private http: HttpClient) {
  }

  getAllWorkLogs(): Observable<WorkLog[]> {
    return this.http.get<WorkLog[]>(environment.apiURL + '/WorkLog/All');
  }
}
