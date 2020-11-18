const {product: productService} = require('../services');

const product = [
  {
    _method: 'post',
    _path: '/product',
    _function: async (req, res) => {
      try {
        const {name, price, imageUrl} = req.body;

        const errors = [];
        if (!name) errors.push('name is required');
        if (!price) errors.push('price is required');
        if (!imageUrl) errors.push('imageUrl is required');
        if (errors.length) return res.status(400).send(errors);

        const result = await productService.create(req.body);
        return res.status(201).send({data: result});
      } catch (error) {
        console.error(error);
        return res.status(500).send({error: 'internal error'});
      }
    },
  },
];

module.exports = product;
