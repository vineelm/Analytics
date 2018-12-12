import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatIconModule, MatTableModule, MatDatepickerModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';

import { StatModule } from '../../shared/modules/stat/stat.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PlannedVsActualModule } from '../components/planned-vs-actual/planned-vs-actual.module';
import { TaskwiseModule } from '../taskwise/taskwise.module';
import { TeameffortModule } from '../components/teameffort/teameffort.module';
import { FilterMenuModule } from '../components/filter-menu/filter-menu.module';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MatGridListModule,
        MatDatepickerModule,
        StatModule,
        PlannedVsActualModule,
        TaskwiseModule,
        TeameffortModule,
        FilterMenuModule,
        MatCardModule,
        FlexLayoutModule,
        MatCardModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule
    ],
    declarations: [DashboardComponent]
})
export class DashboardModule { }
