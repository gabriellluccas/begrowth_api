const {product: Product} = require('../models');

const product = {
  create: ({name, price, imageUrl}) =>
    Product.create({name, price, image_url: imageUrl}),

  findAll: () => Product.find({}),

  findById: (id) => Product.findById(id),

  findByIdAndUpdate: (id, obj = {}) => {
    const options = {new: true, useFindAndModify: false};
    const objToUpdate = {...obj, updated: Date.now()};
    return Product.findByIdAndUpdate(id, objToUpdate, options);
  },

  findByIdAndDelete: (id) => Product.findByIdAndDelete(id),
};

module.exports = product;
