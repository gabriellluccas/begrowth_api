const mongoose = require('mongoose');
const uuid = require('uuid');
const {Schema, model} = mongoose;

const ProductSchema = new Schema({
  _id: {
    type: String,
    default: uuid.v4,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    description: 'product name',
  },
  price: {
    type: Number,
    required: true,
    description: 'product price',
  },
  image_url: {
    type: String,
    required: true,
    description: 'url for product image',
  },
  created: {type: Date, default: Date.now},
  updated: {type: Date, default: Date.now},
}, {_id: false});

module.exports = model('products', ProductSchema);
