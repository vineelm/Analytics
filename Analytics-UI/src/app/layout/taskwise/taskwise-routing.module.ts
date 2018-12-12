import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskwiseComponent } from './taskwise.component';

const routes: Routes = [
  {
    path: '',
    component: TaskwiseComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskWiseRoutingModule { }
