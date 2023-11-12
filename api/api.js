const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/ray-test', createProxyMiddleware({ 
  target: 'https://anycast.cloudflare.tunnel.cloud-private.eu.org', // 目标服务器地址
  changeOrigin: true, // 需要虚拟主机站点
}));

app.listen(3000);
