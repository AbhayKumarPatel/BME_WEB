import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MrpRoutingModule } from './mrp-routing.module';
import { MrpComponent } from './mrp.component';


@NgModule({
  declarations: [MrpComponent],
  imports: [
    CommonModule,
    MrpRoutingModule
  ]
})
export class MrpModule { }
