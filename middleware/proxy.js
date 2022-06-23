const {
    createProxyMiddleware
} = require('http-proxy-middleware');
const koaConnect = require('koa2-connect');

const proxy = koaConnect(
    // 代理全部以 /api 开头的 HTTP 请求
    createProxyMiddleware('/api', {
        target: 'http://www.example.org', // 目标服务器地址
        changeOrigin: true, // 允许跨域
        pathRewrite: {
            '^/api': '/test/api' // 在向服务端发起请求时，去掉标识xhr的前缀
        }
    })
);

module.exports = proxy;