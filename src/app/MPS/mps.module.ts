import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MPSRoutingModule } from './mps-routing.module';
import { MpsComponent } from './mps.component';


@NgModule({
  declarations: [MpsComponent],
  imports: [
    CommonModule,
    MPSRoutingModule
  ]
})
export class MPSModule { }
