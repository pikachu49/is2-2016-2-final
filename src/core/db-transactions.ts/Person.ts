import {Person as PersonModel } from '../db-models/Person.ts';
import {MongoModel} from '../classes/MongoModel.ts';
import * as q from 'q';
import config from '../../settings/index.ts';

export function registerPerson (personData: PersonModel) {
    var deferred = q.defer();
    var model = new MongoModel(config.dbConfig.models.person.name);
    model.insert(personData).then(function (personInstance) {
        deferred.resolve(personInstance);
    }).catch(deferred.reject);
    return deferred.promise;    
}

export function getPersonById (personId: PersonModel) {
    var deferred = q.defer();
    var model = new MongoModel(config.dbConfig.models.person.name);
    model.findById(personId).then(function (personInstance) {
        deferred.resolve(personInstance);
    }).catch(deferred.reject);
    return deferred.promise;
}
