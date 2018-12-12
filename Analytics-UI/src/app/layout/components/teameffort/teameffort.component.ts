import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teameffort',
  templateUrl: './teameffort.component.html',
  styleUrls: ['./teameffort.component.scss']
})
export class TeameffortComponent implements OnInit {

  // bar chart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['Vineel', 'Gopal', 'Raj', 'Mrudula'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [65, 59, 80, 81], label: 'Project Effort' },
    { data: [28, 48, 40, 19], label: 'Management Effort' },
    { data: [28, 48, 40, 19], label: 'Total Effort' }
  ];
  // events
  public chartClicked(e: any): void {
    // console.log(e);
  }

  public chartHovered(e: any): void {
    // console.log(e);
  }


  constructor() { }

  ngOnInit() {
  }

}
