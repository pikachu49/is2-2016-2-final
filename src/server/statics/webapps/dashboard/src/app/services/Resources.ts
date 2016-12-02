import {Injectable} from '@angular/core';
import config from '../../../../../../../settings/index.ts';
import * as q from 'q';
import {Response, Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {RequestParams as GetLotRequestParams, ResponseBody as GetLotResponseBody} from '../../../../../../../server/routers/handlers/lot/getLot/interface.ts';
import {RequestParams as GetProviderRequestParams, ResponseBody as GetProviderResponseBody} from '../../../../../../../server/routers/handlers/provider/getProvider/interface.ts';
import {RequestParams as GetProviderProductsRequestParams, ResponseBody as GetProviderProductsResponseBody} from '../../../../../../../server/routers/handlers/provider/getProviderProducts/interface.ts';
import {RequestParams as RegisterProviderRequestParams, ResponseBody as RegisterProviderResponseBody} from '../../../../../../../server/routers/handlers/provider/registerProvider/interface.ts';
import {RequestParams as GetProductLotRequestParams, ResponseBody as GetProductLotResponseBody} from '../../../../../../../server/routers/handlers/lot/getLot/interface.ts';

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
                url = url.replace(':'+param, params[param]);
            });
            return url;
        }

        private request<T> (serviceName: string, urlParams: any, data: any): Observable<T> {
            urlParams = (urlParams || {});
            var service = config.apiServices[serviceName];
            var response = null;
            var url = this.domain+this.processUrl(service.url, urlParams);
            if (data) {
                response = this.$http[service.method.toLowerCase()](url, data);
            }
            else {
                response = this.$http[service.method.toLowerCase()](url);
            }
            return response.map((data:Response) => data.json());
        }

        public registerPerson (params: { urlParams: any; data: any }): Observable<any> {
            return this.request('registerPerson', params.urlParams, params.data);
        }

        public createSession (params: { urlParams: any; data: any }): Observable<any> {
            return this.request('createSession', params.urlParams, params.data);
        }

        public deleteSession (params: { urlParams: any; data: any }): Observable<any> {
            return this.request('deleteSession', params.urlParams, params.data);
        }

        public registerUser (params: { urlParams: any; data: any }): Observable<any> {
            return this.request('registerUser', params.urlParams, params.data);
        }

        public registerProvider (params: { urlParams: any; data: RegisterProviderRequestParams }): Observable<any> {
            return this.request('registerProvider', params.urlParams, params.data);
        }

        public registerProviderProduct (params: { urlParams: any; data: any }): Observable<any> {
            return this.request('registerProviderProduct', params.urlParams, params.data);
        }

        public registerProductLot (params: { urlParams: any; data: any }): Observable<any> {
            return this.request('registerProductLot', params.urlParams, params.data);
        }

        public getProviders (params: { urlParams: any; data: any }): Observable<any> {
            return this.request('getProviders', params.urlParams, params.data);
        }

        public getProvider (params: { urlParams: { providerId: string }; data: GetProviderRequestParams }): Observable<GetProviderResponseBody> {
            return this.request('getProvider', params.urlParams, params.data);
        }

        public getProviderProducts (params: { urlParams: { providerId: string }; data: GetProviderProductsRequestParams }): Observable<GetProviderProductsResponseBody> {
            return this.request('getProviderProducts', params.urlParams, params.data);
        }

        public getProduct (params: { urlParams: any; data: any }): Observable<any> {
            return this.request('getProduct', params.urlParams, params.data);
        }

        public getProductLots (params: { urlParams: { productId: string}; data: GetProductLotRequestParams }): Observable<GetProductLotResponseBody> {
            return this.request('getProductLots', params.urlParams, params.data);
        }

        public getLot (params: { urlParams: { lotId: string }; data: GetLotRequestParams }): Observable<GetLotResponseBody> {
            return this.request('getLot', params.urlParams, params.data);
        }

}