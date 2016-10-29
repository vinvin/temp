/* eslint-disable */

/**
 * Simple proxy.
 */

var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();

app.all('/api/*', proxy({target: 'http://localhost:5555', changeOrigin: true}));

var wsProxy = proxy({
  target: 'http://localhost:3000',
  changeOrigin: true,
  ws: true,
});

app.all('/sockjs-node/*', wsProxy);

app.all('/*', proxy({target: 'http://localhost:3000', changeOrigin: true}));

app.listen(8000);
