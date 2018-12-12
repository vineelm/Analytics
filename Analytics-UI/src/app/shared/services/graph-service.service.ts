import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { PlannedVsActual } from 'src/app/models/plannedvsactual.model.';

@Injectable({
  providedIn: 'root'
})
export class GraphServiceService {
  private data: any;

  constructor(private http: HttpClient) {
  }

  getPlannedVsActual(): Observable<PlannedVsActual[]> {
    return this.http.get<PlannedVsActual[]>(environment.apiURL + '/Graph/PlannedVsActual');
  }
}

