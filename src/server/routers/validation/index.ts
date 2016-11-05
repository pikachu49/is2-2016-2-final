
/**
 * Imports
 */
    // Dependencies
        import {ServiceValidationRouter} from '../../../core/classes/ServiceValidationRouter.ts';
		import config from '../../../settings/index.ts';

/**
 * Initializing router
 */
    export var router = new ServiceValidationRouter();

/**
 * Setting up router
 */
	Object.keys(config.apiServices).forEach(function (serviceKey) {
		router.setupService(serviceKey);
	});