const Router = require('@koa/router');

const router = new Router();

router.get('/', async(ctx, next) => {
    ctx.body = "<h2 style='color:blue;'>Hello World!</h2>";
});

module.exports = router;