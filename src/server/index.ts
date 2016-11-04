import {ExpressServer} from '../core/classes/ExpressServer.ts';
import {connectDatabase} from '../core/services/connectDatabase.ts';
import {handlersRouter} from './routers/index.ts'; 
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
server.setupStatics('/statics', path.join(__dirname, 'statics'));

// Setup routers
server.addRouter('/api', handlersRouter.router);

// Start Server
server.listen(config.server.port).then(function () {
    console.log('Server up at port '+config.server.port);
})