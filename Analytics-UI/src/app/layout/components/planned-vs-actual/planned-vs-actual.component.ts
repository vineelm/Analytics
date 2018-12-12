import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { GraphServiceService } from '../../../shared/services/graph-service.service';

@Component({
  selector: 'app-planned-vs-actual',
  templateUrl: './planned-vs-actual.component.html',
  styleUrls: ['./planned-vs-actual.component.scss']
})
export class PlannedVsActualComponent implements OnInit {
  dataSource = new MatTableDataSource();

  // bar chart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartLabels: string[];
  public barChartData: any[]  = [
    { data: [65, 59, 80, 81, 56], label: 'Planned' },
    { data: [28, 48, 40, 19, 86], label: 'Actual' }
  ];

  // events
  public chartClicked(e: any): void {
    // console.log(e);
  }

  public chartHovered(e: any): void {
    // console.log(e);
  }

  constructor(private graphSvc: GraphServiceService) {
  }

  ngOnInit() {
    this.graphSvc.getPlannedVsActual().subscribe(
        data => {
          this.barChartLabels = data.map(q => q.WorkItemNo);
          this.barChartData[0]['data'] = data.map(q => q.PlannedEffort);
          this.barChartData[1]['data'] = data.map(q => q.ActualEffort);
        }
      );
  }

}
