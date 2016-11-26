import {Component, OnInit} from '@angular/core';
import {Product} from '../../../../../../../../core/db-models/Product.ts';
import {Resources} from '../../services/Resources.ts';
@Component({
	styles: [require('./style.styl').toString()],
	template: require('./template.jade')(),
})
export class RegisterProductComponent implements OnInit {
	
	// Attributes
		product: Product;
		resources: Resources
	// Methods
		constructor (resources: Resources) {
			this.resources = resources;
			this.product = {
				name: ''
			}
		}
		ngOnInit () {}
		submitRegister () {
			this.resources.RegisterProduct({
				urlParams: {},
				data: {
					name: this.product.name 
				} 
			}).subscribe((resp) => {
				console.log(resp);
			})
		}	

}
