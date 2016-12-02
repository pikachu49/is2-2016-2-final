import {Component, OnInit} from '@angular/core';
import {Product} from '../../../../../../../../core/db-models/Product.ts';
import {Provider} from '../../../../../../../../core/db-models/Provider.ts';
import {Resources} from '../../services/Resources.ts';

@Component({
	styles: [require('./style.styl').toString()],
	template: require('./template.jade')(),
})
export class RegisterProductLotComponent implements OnInit {
	
	// Attributes
		products: Product ; // solo poner Product []; porque con eso sale error en webpack
		resources: Resources;
		currentProvider: Provider;
		providers: Provider[];
		
		currentProduct: Product;

	// Methods
		constructor (resources: Resources) {
			this.currentProvider = null;
			this.currentProduct  = null;
			this.providers = [];
			this.resources = resources;
			this.products = {
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

		getProducts () {
			setTimeout(() => {
				this.resources.getProviderProducts({
					urlParams: { providerId: this.currentProvider.id },
					data: {}
				}).subscribe((resp) => {
					console.log(resp);
				})
			}, 10);
		}
		
		getLots (){
			setTimeout(() => {
				this.resources.getProductLots({
					urlParams: { productId: this.currentProduct.id },
					data: {}
				}).subscribe((resp) => {
					console.log(resp);
				})
			}, 10);		
		}

		

}
