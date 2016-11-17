
import {RequestParams} from './interface.ts';
import {getProviders} from '../../../../../core/db-transactions/Provider.ts';

export function handler (req, res, next) {
    var requestParams: RequestParams = req.body;
    getProviders().then(function (providerInstances) {
        res.status(200);
        res.json(providerInstances);
        res.end();
    }).catch(function (err) {
        res.status(500);
        res.json(err);
        res.end();
    });
}