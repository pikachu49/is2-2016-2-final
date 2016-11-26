import {Component, OnInit} from '@angular/core';
import {Product} from '../../../../../../../../core/db-models/Product.ts';
import {Provider} from '../../../../../../../../core/db-models/Provider.ts';
import {Resources} from '../../services/Resources.ts';

@Component({
	styles: [require('./style.styl').toString()],
	template: require('./template.jade')(),
})
export class ListProductComponent implements OnInit {
	
	// Attributes
		product: Product;
		resources: Resources;
		providers: Provider[];

	// Methods
		constructor (resources: Resources) {
			this.providers = [];
			this.resources = resources;
			this.product = {
				name: '',
				providerId: ''
			}
		}

		ngOnInit () {
			this.resources.getProviders({
				urlParams: {},
				data: {} 
			}).subscribe((resp) => {
				this.providers = resp;
				console.log(this.providers);
			})
		}

		getProducts(){
			this.resources.getProviderProducts({
				urlParams: { providerId: '' },
				data: {}
			}).subscribe((resp) => {
				console.log(resp);
			})
		}

}
