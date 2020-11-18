const mongoose = require('mongoose');

const open = () => {
  let dbUri = 'mongodb://localhost:27017/begrowth';
  const {
    DB_PORT,
    DB_USER,
    DB_PASS,
    DB_NAME,
    DB_LINK_NAME,
  } = process.env;
  if (DB_PORT && DB_USER && DB_PASS && DB_NAME && DB_LINK_NAME) {
    dbUri = `mongodb://${DB_USER}:${DB_PASS}@${DB_LINK_NAME}:${DB_PORT}/${DB_NAME}?authSource=admin`;
  }
  mongoose.set('useCreateIndex', true);
  return mongoose.connect(
      dbUri,
      {useNewUrlParser: true, useUnifiedTopology: true},
  );
};
const close = mongoose.disconnect;
module.exports = {open, close};
