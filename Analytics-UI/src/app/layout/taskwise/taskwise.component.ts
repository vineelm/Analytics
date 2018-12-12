import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../shared/services/task.service';
import { MatTableDataSource } from '@angular/material';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-taskwise',
  templateUrl: './taskwise.component.html',
  styleUrls: ['./taskwise.component.scss']
})
export class TaskwiseComponent implements OnInit {

  dataSource = new MatTableDataSource();
  displayedColumns = ['Task', 'Effort'];

  public gridData: GridOptions;


  constructor(private taskService: TaskService) {
    this.gridData = <GridOptions>{
      rowData: this.createRowData(),
      columnDefs: this.createColumnDefs(),
      onGridReady: () => {
        this.gridData.api.sizeColumnsToFit();
      },
      rowHeight: 48, // recommended row height for material design data grids
    };
  }

  ngOnInit() {
    this.taskService.getTaskWiseData().subscribe(
      data => {
        console.log(data);
        this.dataSource.data = data;
      }
    );
  }

  private createColumnDefs() {
    return [
      {
        headerName: 'Full Name',
        field: 'full_name',
        cellEditor: 'inputRenderer',
        editable: true
      },
      {
        headerName: 'Fruit',
        field: 'fruit',
        cellEditor: 'radioEditor',
        cellEditorParams: {
          fruits: ['Apple', 'Orange', 'Banana']
        },
        editable: true
      },
      {
        headerName: 'Vegetables',
        field: 'vegetable',
        cellEditor: 'selectEditor',
        cellEditorParams: {
          vegetables: ['Carrot', 'Broccoli', 'Potato']
        },
        editable: true
      }
    ];
  }

  private createRowData() {
    return [
      {
        full_name: 'Sean Landsman',
        fruit: 'Apple',
        vegetable: 'Carrot',
        percentage: 5
      },
      {
        full_name: 'Niall Crosby',
        fruit: 'Apple',
        vegetable: 'Potato',
        percentage: 35
      },
      {
        full_name: 'Alberto Guiterzzz',
        fruit: 'Orange',
        vegetable: 'Broccoli',
        percentage: 78
      },
      {
        full_name: 'John Masterson',
        fruit: 'Banana',
        vegetable: 'Potato',
        percentage: 98
      }
    ];
  }
}

