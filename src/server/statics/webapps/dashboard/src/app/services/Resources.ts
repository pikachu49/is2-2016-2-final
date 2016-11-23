import {Injectable} from '@angular/core';
import config from '../../../../../../../settings/index.ts';
import * as q from 'q';
import {Response, Http} from '@angular/http';

@Injectable()
export class Resources {

    // Attributes
        $http: Http;
        domain: string;

    // Methods
        constructor ($http: Http) {
            this.$http = $http;
            this.domain = 'http://localhost:3000';
        }

        private processUrl (url: string, params?: any) {
            if (!params) params = {};
            var urlParams = (url.match(/\:([a-zA-Z])+/g) || []);
            urlParams.forEach(function(param) {
                param = param.substring(1,param.length);
                if (!params[param]) {
                    url = url.replace(':'+param+'/', '');
                    url = url.replace(':'+param, '');
                    return;
                }
                // url = url.replace(':'+param+'/', params[param]);
                url = url.replace(':'+param, params[param]);
            });
            return url;
        }

        private request (serviceName: string, data: any, urlParams: any) {
            let deferred = q.defer();
            var service = config.apiServices[serviceName];
            return deferred.promise;
        }

        public registerPerson () {}

        public createSession () {}

        public deleteSession () {}

        public registerUser () {}

        public registerProvider () {}

        public registerProviderProduct () {}

        public registerProductLot () {}

        public getProviders () {}

        public getProvider () {}

        public getProviderProducts () {}

        public getProduct () {}

        public getProductLots () {}

        public getLot () {}

}