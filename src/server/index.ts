import {ExpressServer} from '../core/classes/ExpressServer.ts';
import {connectDatabase} from '../core/services/connectDatabase.ts';
import {handlersRouter, validationRouter} from './routers/index.ts'; 
import config from '../settings/index.ts';
import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';

// Define Server
var server  = new ExpressServer();

// Setup middleware
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(cookieParser());

// Setup Server
server.server.use('/statics', express.static(path.join(process.cwd(), 'src/server/statics')));

// Setup routers
server.addRouter('/api', validationRouter.router);
server.addRouter('/api', handlersRouter.router);

// Start Server
connectDatabase(config.dbConfig.url).then(function () {
    console.log('Connected to database..');
    server.listen(config.server.port).then(function () {
        console.log('Server up at port '+config.server.port);
    }).catch(function (err) {
        console.log('Error starting server..', err);
    })
}).catch(function (err) {
    console.log('Error connecting to database', err);
});