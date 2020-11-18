const server = require('./server.js');
const {mongoose} = require('./config');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.API_PORT || 3000;

(async () => {
  const app = await server(mongoose);
  app.listen(port, () => {
    console.log(`Server is running in http://localhost:${port}`);
  });
})();

