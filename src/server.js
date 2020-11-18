const express = require('express');

const serverFunction = async (dbConnection) => {
  const server = express();
  server.use(express.json());

  await dbConnection.open();
  return server;
};

module.exports = serverFunction;
