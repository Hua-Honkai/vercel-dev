const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/cloud', createProxyMiddleware({
  router: function(req) {
    return 'https://' + req.url.slice(1);
  },
  changeOrigin: true,
}));

app.use((req, res) => {
  res.send('Hello World');
});

module.exports = app;
