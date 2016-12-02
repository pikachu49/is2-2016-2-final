import {Component} from '@angular/core';
import {Lot} from '../../../../../../../../core/db-models/Lot.ts';
import {Resources} from '../../services/Resources.ts';

@Component({
	styles: [require('./style.styl').toString()],
	template: require('./template.jade')(),
})
export class ListProductLotComponent {
	
	// Attributes
	lots:Lot[];
	resources: Resources;
	// Methods
		constructor (Resources: Resources) {
			this.lots = [];
			this.resources =Resources;
		}

		ngOnInit(){
			this.resources.getProductLots({
				urlParams: {},
				data: {} 
			}).subscribe((resp) => {
				this.lots = resp;	
				console.log(resp);
			})
		}
}
