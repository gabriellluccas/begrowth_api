const express = require('express');

const serverFunction = () => {
  const server = express();

  server.use(express.json());
  return server;
};

module.exports = serverFunction();
