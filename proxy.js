const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (req, res) => {
    let target = ''
    if (req.url.startsWith('/ray-test')) {
        target = 'anycast.cloudflare.tunnel.cloud-private.eu.org'
    }
    // 创建代理对象并转发请求
    createProxyMiddleware({
        target,
        changeOrigin: true,
        pathRewrite: {
            //'^/ray-test/': '/',
        },
    })(req, res)
}
