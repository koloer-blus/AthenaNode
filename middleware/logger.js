/**
 * 打印日志
 * @param {any} ctx 
 * @param {async () => void} next 
 */
const logger = async(ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`[${ctx.method}] ${ctx.url} - ${rt}`);
};

module.exports = logger;