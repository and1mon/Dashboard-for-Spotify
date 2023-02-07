
import { NgModule } from '@angular/core';
import { BrowserModule, platformBrowser } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }

platformBrowser().bootstrapModule(AppModule);
