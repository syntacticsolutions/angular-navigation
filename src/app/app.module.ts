import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResponsiveNavigation } from './components/responsive-navigation/responsive-navigation'
import { HelloWorldPage } from './components/hello-world-page/hello-world-page'

@NgModule({
  declarations: [
    AppComponent,
    ResponsiveNavigation,
    HelloWorldPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
