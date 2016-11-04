import {Lot as LotModel} from '../db-models/Lot.ts';
import {MongoModel} from '../classes/MongoModel.ts';
import * as q from 'q';
import config from '../../settings/index.ts';

export function registerLot (lotData: LotModel) {
    var deferred = q.defer();
    var model = new MongoModel(config.dbConfig.models.lot.code);
    model.insert(lotData).then(function (lotInstance) {
        deferred.resolve(lotInstance);
    }).catch(deferred.reject);
    return deferred.promise;
}

export function getLotById (lotId: string) {
    var deferred = q.defer();
    var model = new MongoModel(config.dbConfig.models.lot.code);
    model.findById(lotId).then(function (lotInstance) {
        deferred.resolve(lotInstance);
    }).catch(deferred.reject);
    return deferred.promise;
}
