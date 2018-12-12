import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material';
import { MatFormFieldModule, MatPaginatorModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { AgGridModule } from 'ag-grid-angular';

import { TaskwiseComponent } from './taskwise.component';
import { TaskWiseRoutingModule } from './taskwise-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    TaskWiseRoutingModule,
    AgGridModule
  ],
  declarations: [TaskwiseComponent],
  exports: [TaskwiseComponent]
})
export class TaskwiseModule { }
