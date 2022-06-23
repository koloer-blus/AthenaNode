const app = require('../app');
const config = require('./config');

app.listen(config.server.port || 3000);