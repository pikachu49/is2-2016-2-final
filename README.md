Basic Node.js Server Seed
=========================

A Node.js based server using express and typescript (Angular2 for the client side)

## File Structure
```bash

# Configuration files
webpack.config.js
package.json
gulpfile.js

# Server Sources
src/

    # Core Utils
    core/
        classes/..
        interfaces/..
        services/..
        db-models/..
        db-transactions/..

    # Server settings
    settings/..

    # Server
    server/
        index.ts
        statics/..
        routing/..

# Other files
..

```

## Requirements

#### Development
- [NPM]
- [Node.js]
- [Gulp]

#### Production
- [NPM]
- [Node.js]
- [PM2]