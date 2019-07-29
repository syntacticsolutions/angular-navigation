import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResponsiveNavigation } from './components/responsive-navigation/responsive-navigation'
import { HelloWorldPage } from './components/hello-world-page/hello-world-page'
import { AboutPage } from './components/about-page/about-page'
import { ContactPage } from './components/contact-page/contact-page'
import { BlogPage } from './components/blog-page/blog-page'
import { PortfolioPage } from './components/portfolio-page/portfolio-page'

@NgModule({
  declarations: [
    AppComponent,
    ResponsiveNavigation,
    HelloWorldPage,
    AboutPage,
    ContactPage,
    PortfolioPage,
    BlogPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
