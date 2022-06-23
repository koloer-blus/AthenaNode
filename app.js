const Koa = require("koa");
const StaticServer = require('koa-static');
const path = require('path');
const Json = require('koa-json');
const Logger = require("./middleware/logger");
const Proxy = require("./middleware/proxy");

const app = new Koa();


// TODO: MiddleWare
app.use(Logger);
app.use(Json())

//TODO: Static Assets
app.use(StaticServer(path.join(__dirname, '/static')), {
    dynamic: true
}, {
    maxAge: 365 * 24 * 60 * 60
});

// TODO: Router
app.use(require('./router/index').routes())
app.use(require('./router/user').routes())

// Export
module.exports = app;