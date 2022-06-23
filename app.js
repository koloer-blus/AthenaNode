const Koa = require("koa");
const Json = require('koa-json')
const Logger = require("./middleware/logger");

const app = new Koa();


// TODO: MiddleWare
app.use(Logger);
app.use(Json())

// TODO: Router
app.use(require('./router/index').routes())
app.use(require('./router/user').routes())

// Export
module.exports = app;