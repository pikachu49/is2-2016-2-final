import {Provider as ProviderModel} from '../db-models/Provider.ts';
import {Product as ProductModel} from '../db-models/Product.ts';
import {MongoModel} from '../classes/MongoModel.ts';
import * as q from 'q';
import config from '../../settings/index.ts';

export function registerProvider (providerData: ProviderModel): Promise<ProviderModel> {
    var deferred = q.defer();
    var model = new MongoModel(config.dbConfig.models.provider.name);
    model.insert(providerData).then(function (providerInstance) {
        deferred.resolve(providerInstance);
    }).catch(deferred.reject);
    return deferred.promise;
}

export function getProviderById (providerId: string): Promise<ProviderModel> {
    var deferred = q.defer();
    var model = new MongoModel(config.dbConfig.models.provider.name);
    model.findById(providerId).then(function (providerInstance) {
        deferred.resolve(providerInstance);
    }).catch(deferred.reject);
    return deferred.promise;
}

export function getProviders (): Promise<ProviderModel[]> {
    var deferred = q.defer();
    var model = new MongoModel(config.dbConfig.models.provider.name);
    model.findAll({}).then(function (providerInstances) {
        deferred.resolve(providerInstances);
    }).catch(deferred.reject);
    return deferred.promise;
}
export function getProviderProductsByProviderId (providerId: string): Promise<ProductModel>{
    var deferred=q.defer();
    var model= new MongoModel(config.dbConfig.models.product.name);
    model.findAll({
        providerId:providerId
    }).then(function (productInstances){
        deferred.resolve(productInstances);
    }).catch(deferred.reject);
    return deferred.promise;
}