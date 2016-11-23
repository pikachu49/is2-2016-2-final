import {Component} from '@angular/core';

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

	// Methods
		constructor () {
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
