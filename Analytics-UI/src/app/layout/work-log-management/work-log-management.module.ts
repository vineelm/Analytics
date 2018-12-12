import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { MatTableModule } from '@angular/material';
import { MatFormFieldModule, MatPaginatorModule } from '@angular/material';
import { MatInputModule } from '@angular/material';

import { WorkLogManagementComponent } from './work-log-management.component';
import { WorkLogManagementRoutingModule } from './work-log-management-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    WorkLogManagementRoutingModule,
    AgGridModule.withComponents([])
  ],
  declarations: [WorkLogManagementComponent]
})
export class WorkLogManagementModule { }
