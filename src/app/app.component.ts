import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title:string = 'ng-navigation-menu';
  navLinks:object[] = [
    {
      text: 'Contact',
  path: '/contact',
  icon: 'ion-ios-megaphone'
    },
    {
      text: 'About',
  path: '/about',
  icon: 'ion-ios-business'
    },
    {
      text: 'Blog',
  path: '/blog',
  icon: 'ion-ios-bonfire'
    },
    {
      text: 'Portfolio',
  path: '/portfolio',
  icon: 'ion-ios-briefcase'
    }
  ]
}
