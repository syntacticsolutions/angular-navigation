import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloWorldPage } from './components/hello-world-page/hello-world-page'
import { AboutPage } from './components/about-page/about-page'
import { ContactPage } from './components/contact-page/contact-page'
import { BlogPage } from './components/blog-page/blog-page'
import { PortfolioPage } from './components/portfolio-page/portfolio-page'

const routes: Routes = [];

const appRoutes: Routes = [
  { path: '', component:  HelloWorldPage },
  { path: 'contact', component: ContactPage },
  { path: 'about', component: AboutPage },
  { path: 'portfolio', component: PortfolioPage },
  { path: 'blog', component: BlogPage }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
