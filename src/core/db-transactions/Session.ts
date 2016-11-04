import {Session as SessionModel} from '../db-models/Session.ts';
import {MongoModel} from '../classes/MongoModel.ts';
import * as q from 'q';
import config from '../../settings/index.ts';

export function registerSession (sessionData: SessionModel) {
    var deferred = q.defer();
    var model = new MongoModel(config.dbConfig.models.session.name);
    model.insert(sessionData).then(function (sessionInstance) {
        deferred.resolve(sessionInstance);
    }).catch(deferred.reject);
    return deferred.promise;
}

export function getSessionById (sessionId: string) {
    var deferred = q.defer();
    var model = new MongoModel(config.dbConfig.models.session.name);
    model.findById(sessionId).then(function (sessionInstance) {
        deferred.resolve(sessionInstance);
    }).catch(deferred.reject);
    return deferred.promise;
}
