import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloWorldPage } from './components/hello-world-page/hello-world-page'


const routes: Routes = [];

const appRoutes: Routes = [
  { path: '', component:  HelloWorldPage }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
