
import {RequestParams} from './interface.ts';
import {getLotsByProductId} from '../../../../../core/db-transactions/lot.ts';

export function handler (req, res, next) {
    getLotsByProductId(req.params.productId).then(function (lotsInstances) {
        res.status(200);
        res.json(lotsInstances);
        res.end();
    }).catch(function (err) {
        res.status(500);
        res.json(err);
        res.end();
    });
}