const express = require('express');
const cors = require('cors');
const router = require('./router');

const serverFunction = async (dbConnection) => {
  const server = express();
  server.use(express.json());

  const {APP_URL} = process.env;
  corsOptions = {
    origin: APP_URL || 'http://localhost:3000',
  };
  server.use(cors());

  await dbConnection.open();
  server.use(router);
  return server;
};

module.exports = serverFunction;
