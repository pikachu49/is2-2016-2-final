
// Define interface
interface Configuration {
    server?: { port: number };
}

// Setup
var config: Configuration = {};

config.server = require('./server.json');

// Export
export default config;