const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (req, res) => {
    let target = 'https://anycast.cloudflare.tunnel.cloud-private.eu.org'
    if (req.url.startsWith('/ray-test')) {
        target = 'https://anycast.cloudflare.tunnel.cloud-private.eu.org'
    }
    // 创建代理对象并转发请求
    createProxyMiddleware({
        target,
        changeOrigin: true,
        pathRewrite: {
            // 通过路径重写，去除请求路径中的 `/api`
            // 如果开启了,那么 /api/user/login 将被转发到 http://gmall-h5-api.atguigu.cn/user/login
            //'^/api/': '/',
        },
    })(req, res)
}
