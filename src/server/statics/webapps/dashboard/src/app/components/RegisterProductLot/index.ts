import {Component, OnInit} from '@angular/core';
import {Product} from '../../../../../../../../core/db-models/Product.ts';
import {Provider} from '../../../../../../../../core/db-models/Provider.ts';
import {Lot} from '../../../../../../../../core/db-models/Lot.ts';
import {Resources} from '../../services/Resources.ts';

@Component({
	styles: [require('./style.styl').toString()],
	template: require('./template.jade')(),
})
export class RegisterProductLotComponent implements OnInit {
	
	// Attributes
		products: Product[]; // solo poner Product []; porque con eso sale error en webpack
		resources: Resources;
		currentProvider: Provider;
		providers: Provider[];
		lot: Lot;
		currentProduct: Product;

	// Methods
		constructor (resources: Resources) {
			this.currentProvider = null;
			this.currentProduct  = null;
			this.providers = [];
			this.resources = resources;
			this.products = [];
			this.lot = {
				code: '',
				productId: ''
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


		submitRegisterLot () {
			this.resources.registerProductLot({
				urlParams: {
					productId: this.currentProduct.id,
				},
				data: {
					code : this.lot.code
				}
			}).subscribe((resp) => {
				console.log(resp);
			})
		}2


		getProducts () {
			setTimeout(() => {
				this.resources.getProviderProducts({
					urlParams: { providerId: this.currentProvider.id },
					data: {}
				}).subscribe((resp) => {
					this.products = resp;
					console.log(resp);
				})
			}, 10);
		}
}
