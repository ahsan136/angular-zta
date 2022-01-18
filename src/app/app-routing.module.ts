import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PipeComponent } from './pipe/pipe.component';
import { FlowchartComponent } from './flowchart/flowchart.component';


const routes: Routes = [
  
  // { path:'profile-table', component: ProfileTableComponent, },
  
  { path: 'pipe', component: PipeComponent,},
  { path: 'flow', component: FlowchartComponent,},



];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

