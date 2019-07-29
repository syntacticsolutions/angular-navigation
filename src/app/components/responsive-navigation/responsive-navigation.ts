import { Component, Input } from '@angular/core';

@Component({
    selector: 'responsive-navigation',
    templateUrl: './responsive-navigation.html',
	styleUrls: ['./responsive-navigation.scss']
})
  
  export class ResponsiveNavigation {
	
	@Input('logoUrl') logoUrl: string;
	@Input('navLinks') navLinks: object[];
	@Input('background') background: string;
	@Input('linkColor') linkColor: string;
	@Input('hoverBackground') hoverBackground: string;
	
	constructor () {

	}


  }