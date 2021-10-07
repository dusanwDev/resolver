import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { HttpClientModule } from '@angular/common/http';
import { UserResolver } from './reolver.resolver';

@NgModule({
  declarations: [AppComponent, ComponentComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
