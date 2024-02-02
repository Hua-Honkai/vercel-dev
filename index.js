const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
  let targetUrl = req.url.slice(1); // remove '/' from the URL
  targetUrl = 'https://' + targetUrl;

  const options = {
    target: targetUrl,
    changeOrigin: true,
    pathRewrite: (path, req) => path.split('/').slice(1).join('/'),
    onProxyRes: function (proxyRes, req, res) {
      proxyRes.headers['access-control-allow-origin'] = '*';
    }
  };

  const proxy = createProxyMiddleware(options);
  proxy(req, res, () => {});
};
