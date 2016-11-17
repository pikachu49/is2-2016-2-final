import {Product as ProductModel} from '../db-models/Product.ts';
import {MongoModel} from '../classes/MongoModel.ts';
import * as q from 'q';
import config from '../../settings/index.ts';

export function registerProduct (productData: ProductModel): Promise<ProductModel> {
    var deferred = q.defer();
    var model = new MongoModel(config.dbConfig.models.product.name);
    model.insert(productData).then(function (productInstance) {
        deferred.resolve(productInstance);
    }).catch(deferred.reject);
    return deferred.promise;
}

export function getProductById (productId: string): Promise<ProductModel> {
    var deferred = q.defer();
    var model = new MongoModel(config.dbConfig.models.product.name);
    model.findById(productId).then(function (productInstance) {
        deferred.resolve(productInstance);
    }).catch(deferred.reject);
    return deferred.promise;
}

export function getProviderByProductId (providerId: string): Promise<ProductModel[]> {
    var deferred = q.defer();
    var model = new MongoModel(config.dbConfig.models.product.name);
    model.findAll({
        providerId: providerId
    }).then(function (productsInstances){
        deferred.resolve(productsInstances);
    }).catch(deferred.reject);
    return deferred.promise;
}