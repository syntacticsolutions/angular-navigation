import { Component, Input } from '@angular/core';

@Component({
    selector: 'responsive-navigation',
    templateUrl: './responsive-navigation.html',
	styleUrls: ['./responsive-navigation.scss']
})
  
  export class ResponsiveNavigation {
	
	@Input('logo') logo: string;
	@Input('navLinks') navLinks: object[];
	@Input('background') background: string;
	@Input('linkColor') linkColor: string;
	@Input('hoverBackground') hoverBackground: string;
	navOpen:boolean = false
	hoverIndex:number = -1

	constructor () {
	}

	setNavSlider= () : void => {
		this.navOpen = !this.navOpen
  	}

  }