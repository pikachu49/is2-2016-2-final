import {Component, OnInit} from '@angular/core';
import {Provider} from '../../../../../../../../core/db-models/Provider.ts';
import {Resources} from '../../services/Resources.ts';

@Component({
	styles: [require('./style.styl').toString()],
	template: require('./template.jade')(),
})
export class ListProviderComponent {
	
	// Attributes
	//test
	providers: Provider[];
	resources: Resources;

	// Methods
		constructor (resources: Resources) {
			this.providers = [];
			this.resources = resources;
			

		}
		ngOnInit(){
			this.resources.getProviders({
				urlParams: {},
				data: {} 
			}).subscribe((resp) => {
				this.providers = resp;	
				console.log(resp);
			})
		}

}