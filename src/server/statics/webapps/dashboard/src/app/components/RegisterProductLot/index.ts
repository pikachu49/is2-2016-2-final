import {Component, OnInit} from '@angular/core';
import {Lot} from '../../../../../../../../core/db-models/Lot.ts';
import {Resources} from '../../services/Resources.ts';


@Component({
	styles: [require('./style.styl').toString()],
	template: require('./template.jade')(),
})
export class RegisterProductLotComponent implements OnInit{
	
	// Attributes
		lot: Lot;
		resources: Resources;
	// Methods
		constructor (resources: Resources) {
			this.resources = resources;
			this.lot = {
				code: '',
				productId: ''
			}
		}

		ngOnInit () {}
		submitRegister () {
			this.resources.registerProductLot({
				urlParams: {},	
				data: {
					code: this.lot.code,
					productId: this.lot.productId
				} 
			}).subscribe((resp) => {
				console.log(resp);
			})
		}
}

