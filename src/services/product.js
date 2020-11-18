const {product: Product} = require('../models');

const product = {
  create: ({name, price, imageUrl}) =>
    Product.create({name, price, image_url: imageUrl}),
};

module.exports = product;
