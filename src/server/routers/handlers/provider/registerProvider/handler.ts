import {RequestParams} from './interface.ts';
import {registerProvider} from '../../../../../core/db-transactions/Provider.ts';

export function handler (req, res, next) {
    var requestParams: RequestParams = req.body;
    registerProvider(requestParams).then(function (providerInstance) {
        res.status(200);
        res.json(providerInstance);
        res.end();
    }).catch(function (err) {
        res.status(500);
        res.json(err);
        res.end();
    });
}