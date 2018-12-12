import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { PlannedVsActualComponent } from './planned-vs-actual.component';

@NgModule({
  imports: [
    CommonModule,
    Ng2Charts,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule
  ],
  declarations: [PlannedVsActualComponent],
  exports: [PlannedVsActualComponent]
})
export class PlannedVsActualModule { }
