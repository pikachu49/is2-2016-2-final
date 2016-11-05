import {Admin as AdminModel } from '../db-models/Admin.ts';
import {MongoModel} from '../classes/MongoModel.ts';
import * as q from 'q';
import config from '../../settings/index.ts';

export function registerAdmin (adminData: AdminModel) {
    var deferred = q.defer();
    var model = new MongoModel(config.dbConfig.models.admin.name);
    model.insert(adminData).then(function (adminInstance) {
        deferred.resolve(adminInstance);
    }).catch(deferred.reject);
    return deferred.promise;
}

export function getAdminById (adminId: string) {
    var deferred = q.defer();
    var model = new MongoModel(config.dbConfig.models.admin.name);
    model.findById(adminId).then(function (adminInstance) {
        deferred.resolve(adminInstance);
    }).catch(deferred.reject);
    return deferred.promise;
}
