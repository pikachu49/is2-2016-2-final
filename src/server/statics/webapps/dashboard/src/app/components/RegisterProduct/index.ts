import {Component, OnInit} from '@angular/core';
import {Product} from '../../../../../../../../core/db-models/Product.ts';
import {Resources} from '../../services/Resources.ts';
@Component({
	styles: [require('./style.styl').toString()],
	template: require('./template.jade')(),
})
export class RegisterProductComponent implements OnInit {
	
	// Attributes
		product: Product[];
		resources: Resources;
		//providers:Provider[]
	// Methods
		constructor (resources: Resources) {
			this.resources = resources;
		}
		ngOnInit () {}
		submitRegister () {
			this.resources.registerProduct({
				urlParams: {},
				data: {
					name: this.product 
				} 
			}).subscribe((resp) => {
				console.log(resp);
			})
		}
		
}
