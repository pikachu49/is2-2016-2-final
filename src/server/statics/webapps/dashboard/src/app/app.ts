import {Component} from '@angular/core';
import {Resources} from './services/Resources.ts';

interface IAction {
	name: string;
	path?: string;
}

interface IModule {
	name: string;
	actions: IAction [];
}

@Component({
	selector: 'app',
	styles: [require('./app.styl').toString()],
	template: require('./app.jade')(),
})
export class AppComponent {
	
	// Attributes
		modules: IModule [];
		resources: Resources;

	// Methods
		constructor (resources: Resources) {
			this.resources = resources;
			this.modules = [{
				name: 'Proveedores',
				actions: [{
					name: 'Registrar',
					path: '/register-provider'
				},
				{
					name: 'Listar',
					path: '/list-provider'
				},
				{
					name: 'Ver detalles',
					path: '/detail-provider'
				}]
			},
			{
				name: 'Productos',
				actions: [{
					name: 'Registrar',

					path: '/register-product'
				},
				{
					name: 'Listar',
					path: '/list-product'
				},
				{
					name: 'Ver detalles',
					path: '/detail-product'
				}]
			},
			{
				name: 'Lotes',
				actions: [{
					name: 'Registrar',
					path: '/register-product-lot'
				},
				{
					name: 'Listar',
					path: '/list-product-lot'
				},
				{
					name: 'Ver detalles',
					path: '/detail-lot'
				}]
			}]
		}

}
