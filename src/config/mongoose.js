const mongoose = require('mongoose');

const open = () => {
  const {
    DB_PORT = '27017',
    DB_USER = 'root',
    DB_PASS = 'root',
    DB_NAME = 'begrowth',
    DB_LINK_NAME = 'mongo',
  } = process.env;
  dbUri = `mongodb://${DB_USER}:${DB_PASS}@${DB_LINK_NAME}:${DB_PORT}/${DB_NAME}?authSource=admin`;
  mongoose.set('useCreateIndex', true);
  return mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
const close = mongoose.disconnect;
module.exports = {open, close};
