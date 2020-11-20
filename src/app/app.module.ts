import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Depth1Component } from './depth1/depth1.component';
import { AppRoutingModule } from './app-routing.module';
import { Depth1childComponent } from './depth1child/depth1child.component';

@NgModule({
  declarations: [
    AppComponent,
    Depth1Component,
    Depth1childComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
