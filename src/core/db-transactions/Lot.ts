import {Lot as LotModel} from '../db-models/Lot.ts';
import {MongoModel} from '../classes/MongoModel.ts';
import * as q from 'q';
import config from '../../settings/index.ts';

export function registerLot (lotData: LotModel): Promise<LotModel> {
    var deferred = q.defer();
    var model = new MongoModel(config.dbConfig.models.lot.name);
    model.insert(lotData).then(function (lotInstance) {
        deferred.resolve(lotInstance);
    }).catch(deferred.reject);
    return deferred.promise;
}

export function getLotById (lotId: string): Promise<LotModel> {
    var deferred = q.defer();
    var model = new MongoModel(config.dbConfig.models.lot.name);
    model.findById(lotId).then(function (lotInstance) {
        deferred.resolve(lotInstance);
    }).catch(deferred.reject);
    return deferred.promise;
}

export function getLotsByProductId (productId: string): Promise<LotModel[]> {
    var deferred = q.defer();
    var model = new MongoModel(config.dbConfig.models.lot.name);
    model.findAll({
        productId: productId
    }).then(function (lotsInstances) {
        deferred.resolve(lotsInstances);
    }).catch(deferred.reject);
    return deferred.promise;
}