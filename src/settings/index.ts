
// Define interface
    interface Configuration {
        server?: { port: number };
        dbConfig?: {
            domain: string;
            port: number;
            username: string;
            password: string;
            dbname: string;
            url: string;
            models: any;
        };
        email?: {
            email: string;
            password: string;
        };
        apiServices?: any;
    }

// Setup
    var config: Configuration = {};

    // Server
    config.server = require('./server.json');

    // Email
    config.email = require('./email.json');

    // Database
    config.dbConfig = require('./db-config.json');
    config.dbConfig.url = 'mongodb://'+config.dbConfig.username+':'+config.dbConfig.password+'@'+config.dbConfig.domain+':'+config.dbConfig.port+'/'+config.dbConfig.dbname+'?replicaSet=rs-ds037806';

    // API Services
    config.apiServices = require('./api-services.json');

// Export
    export default config;