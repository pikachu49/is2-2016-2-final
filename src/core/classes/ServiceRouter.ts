
// Imports
	import config from '../../settings/index.ts';
	import {ExpressRouter} from './ExpressRouter.ts';

// Exports
	export class ServiceRouter extends ExpressRouter {

		// Attributes

		// Methods
			constructor () {
				super();
			}

			public addService (name: string, handler: Function) {
				let serviceConfig = config.apiServices[name];
				this.addRoute(serviceConfig.method, serviceConfig.path, handler);
			}

	}