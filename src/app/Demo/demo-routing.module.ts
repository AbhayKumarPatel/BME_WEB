import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from '../Demo/demo.component';
import { Demo1Component } from './Componentes/demo1/demo1.component';

const routes: Routes = [
  { path: '', component: DemoComponent },
  { path: 'Demo1-cmp', component: Demo1Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
