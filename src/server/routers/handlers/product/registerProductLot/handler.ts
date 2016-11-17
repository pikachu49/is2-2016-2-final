
import {registerLot} from '../../../../../core/db-transactions/Lot.ts';

export function handler (req, res, next) {
    registerLot({
        code: req.body.code,
        productId: req.params.productId 
    }).then(function (lot) {
        res.status(200);
        res.json(lot);
        res.end();
    }).catch(function (err) {
        res.status(500);
        res.json(err);
        res.end();
    })
}