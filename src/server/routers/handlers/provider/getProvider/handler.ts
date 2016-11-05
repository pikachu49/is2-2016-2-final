import {RequestParams} from './interface.ts';
import {getProviderById} from '../../../../../core/db-transactions/Provider.ts';

export function handler (req, res, next) {
    
    var requestParams: RequestParams = req.body;
    getProviderById(requestParams).then(function (providerInstance) {
        res.status(200);
        res.json(providerInstance);
        res.end();
    }).catch(function (err) {
        res.status(500);
        res.json(err);
        res.end();
    });
}