import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import {MrpModule } from './Mrp/mrp.module';
import {MPSModule } from './MPS/mps.module';
import { DemoModule } from './Demo/demo.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoModule,
    MPSModule,
    MrpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
