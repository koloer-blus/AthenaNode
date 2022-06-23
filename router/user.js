const Router = require('@koa/router');

const router = new Router();

router
    .get('/user', async(ctx, next) => {
        ctx.body = "<span style='color:red;'>No Auth, Please Login</span>"
    })
    .get('/user/:id', async(ctx, next) => {
        ctx.body = {
            name: 'jack',
            age: 22,
        }
    })
    .post('/login', async(ctx, next) => {
        ctx.body = {
            status: 'ok'
        }
    });

module.exports = router;