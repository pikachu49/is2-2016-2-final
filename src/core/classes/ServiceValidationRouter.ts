
// Imports
	import config from '../../settings/index.ts';
	import {ServiceRouter} from './ServiceRouter.ts';
	import * as JSONSchema from 'jsonschema';

// Exports
	export class ServiceValidationRouter extends ServiceRouter {

		// Attributes
			name: string;

		// Methods
			constructor () {
				super();
			}

			public setupService (name: string) {
				var service = config.apiServices[name];
				super.addService(name, (req, res, next) => {
					/**
					 * Validating url params
					 */
						var invalidUrlParams = this.validateUrlParams(service.url, req.params);
						if (invalidUrlParams.length) {
							res.status(401);
							res.json({ invalidUrlParams: invalidUrlParams });
							res.end();
							return;
						}

					/**
					 * Validating schema
					 */
						if (service.schema) {
							var validator = new JSONSchema.Validator();
							var validationResults = validator.validate(req.body, service.schema);
							if (validationResults.errors.length) {
								res.status(401);
								res.json({
									invalidParams: validationResults.errors
								});
								res.end();
								return;
							}
						}

					/**
					 * Everything's ok
					 */
						next();
				});
			}

			private validateUrlParams (url: string, params: any): string [] {
				return this.getUrlParams(url).filter((paramKey) => {
					return !this.testHexadecimal(params[paramKey]);
				});
			}

			private testHexadecimal (hexaString: string): boolean {
				return (/^[0-9A-Fa-f]{24}$/g).test(hexaString);
			}

			private getUrlParams (url: string): string [] {
				var params = url.match(/\:[a-zA-Z]+/g) || [];
				return params.map(function (param) {
					return param.substring(1, param.length);
				});
			}

	}