/* global require, process */
const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('app.json');
const middlewares = jsonServer.defaults({
  static: 'dist',
  noCors: true
});
const port = process.env.PORT || 3131;

server.use(middlewares);
server.use(router);

server.listen(port);

export default server;
