import {Component, OnInit} from '@angular/core';
import {Provider} from '../../../../../../../../core/db-models/Provider.ts';
import {Resources} from '../../services/Resources.ts';

@Component({
	styles: [require('./style.styl').toString()],
	template: require('./template.jade')(),
})
export class DetailProveedorComponent implements OnInit {
		// Attributes
		resources: Resources;
		currentProvider: Provider;
		providers: Provider[];

		// Methods
		constructor (resources: Resources) {
			this.currentProvider = null;
			this.providers = [];
			this.resources = resources;
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

}