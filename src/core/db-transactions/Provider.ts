import {Provider as ProviderModel} from '../db-models/Provider.ts';
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