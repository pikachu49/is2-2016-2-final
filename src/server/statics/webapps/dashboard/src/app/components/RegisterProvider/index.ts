import {Component, OnInit} from '@angular/core';
import {Provider} from '../../../../../../../../core/db-models/Provider.ts';
import {Resources} from '../../services/Resources.ts';

@Component({
	styles: [require('./style.styl').toString()],
	template: require('./template.jade')(),
})
export class RegisterProviderComponent implements OnInit {
	
	// Attributes
		provider: Provider;
		resources: Resources;

	// Methods
		constructor (resources: Resources) {
			this.resources = resources;
			this.provider = {
				name: ''
			}
		}
		ngOnInit () {}
		submitRegister () {
			this.resources.registerProvider({
				urlParams: {},
				data: {
					name: this.provider.name 
				} 
			}).subscribe((resp) => {
				console.log(resp);
			})
		}
}
