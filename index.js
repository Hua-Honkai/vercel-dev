const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/cloud', createProxyMiddleware({
  target: 'https://',
  changeOrigin: true,
  pathRewrite: {
    '^/cloud/': '/',
  },
}));

app.use((req, res) => {
  res.send('Hello World');
});

module.exports = app;
