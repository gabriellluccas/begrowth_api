const express = require('express');
const router = require('./router');

const serverFunction = async (dbConnection) => {
  const server = express();
  server.use(express.json());

  await dbConnection.open();
  server.use(router);
  return server;
};

module.exports = serverFunction;
