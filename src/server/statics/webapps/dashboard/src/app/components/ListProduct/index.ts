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
		products: Product [];
		resources: Resources;
		currentProvider: Provider;
		//currentProduct: Product;
		providers: Provider[];

	// Methods
		constructor (resources: Resources) {
			this.currentProvider = null;
			//this.currentProduct = null;
			this.providers = [];
			this.resources = resources;
			this.products = [];
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

		getProducts () {
			setTimeout(() => {
				this.resources.getProviderProducts({
					urlParams: { providerId: this.currentProvider.id },
					data: {}
				}).subscribe((resp: any) => {
					this.products = resp;
					console.log(resp);
				})
			}, 10);
		}
		

}
