import {Component} from '@angular/core';

@Component({
	styles: [require('./style.styl').toString()],
	template: require('./template.jade')(),
})
export class ListProductLotComponent {
	
	// Attributes

	// Methods
		constructor () {
			
		}

}