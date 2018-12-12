import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkLogManagementComponent } from './work-log-management.component';

const routes: Routes = [
  {
    path: '',
    component: WorkLogManagementComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkLogManagementRoutingModule { }
