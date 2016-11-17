import {RequestParams} from './interface.ts';
import {getProviderByProductId} from '../../../../../core/db-transactions/product.ts';

export function handler (req, res, next) {
    getProviderByProductId(req.params.providerId).then(function (productsInstances) {
        res.status(200);
        res.json(productsInstances);
        res.end();
    }).catch(function (err) {
        res.status(500);
        res.json(err);
        res.end();
    });
}