const server = require('./server.js');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.API_PORT || 3000;

server.listen(port, () => {
  console.log(`Server is running in http://localhost:${port}`);
});

