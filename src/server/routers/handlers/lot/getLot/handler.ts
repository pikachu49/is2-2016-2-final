import {RequestParams} from './interface.ts';
import {getLotById} from '../../../../../core/db-transactions/Lot.ts';

export function handler (req, res, next) {
    getLotById(req.params.lotId).then(function (lotInstance) {
        res.status(200);
        res.json(lotInstance);
        res.end();
    }).catch(function (err) {
        res.status(500);
        res.json(err);
        res.end();
    });
}
