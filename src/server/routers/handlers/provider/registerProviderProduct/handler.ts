import {registerProduct} from '../../../../../core/db-transactions/Product.ts';

export function handler (req, res, next) {
    registerProduct({
        name: req.body.name,
        providerId: req.params.providerId
    }).then(function(product){
        res.status(200);
        res.json(product);
        res.end();
    }).catch(function(err){
        res.status(500);
        res.json(err);
        res.end();
    })
}