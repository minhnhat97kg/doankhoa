const config = require('./config/config');
const app = require('./config/express');
const router = require('./config/router')
const security = require('./config/security')
const error = require('./middleware/error')
require('./config/mongoose');

router(app)

global.__basedir = __dirname;
error(app)
if (!module.parent) {
    app.listen(config.port, () => {
        console.info(`Server started on port ${config.port} (${config.env})`);
    });
}

module.exports = app;
