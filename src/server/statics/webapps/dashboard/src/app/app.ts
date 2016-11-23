import {Component} from '@angular/core';
import {Resources} from './services/Resources.ts';

interface IAction {
	name: string;
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
					name: 'Registrar'
				},
				{
					name: 'Listar'
				},
				{
					name: 'Buscar'
				}]
			},
			{
				name: 'Productos',
				actions: [{
					name: 'Registrar'
				},
				{
					name: 'Listar'
				},
				{
					name: 'Buscar'
				}]
			}]
		}

}
