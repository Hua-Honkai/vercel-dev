const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
  let target = req.url.replace('/cloud/', '');
  createProxyMiddleware({
    target,
    changeOrigin: true,
    onProxyRes: function (proxyRes, req, res) {
      proxyRes.headers['access-control-allow-origin'] = '*';
    },
  })(req, res);
};
