import { Component, OnInit } from '@angular/core';
import { WorkLogMgmtService } from '../../shared/services/work-log-mgmt.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-work-log-management',
  templateUrl: './work-log-management.component.html',
  styleUrls: ['./work-log-management.component.scss']
})
export class WorkLogManagementComponent implements OnInit {

  dataSource = new MatTableDataSource();
  displayedColumns = ['Id', 'WorkItemNo', 'Title', 'PlannedStartTime', 'PlannedEndTime', 'Effort', 'Status'];


  constructor(private workLogSvc: WorkLogMgmtService) {
  }

  ngOnInit() {
      this.workLogSvc.getAllWorkLogs().subscribe(
        data => {
          console.log(data);
          this.dataSource.data = data;
        }
      );
  }
}
