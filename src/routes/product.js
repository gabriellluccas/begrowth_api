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
  {
    _method: 'get',
    _path: '/product',
    _function: async (req, res) => {
      try {
        const result = await productService.findAll();
        if (!result.length) return res.status(204).send();
        return res.status(200).send({data: result});
      } catch (error) {
        console.error(error);
        return res.status(500).send({error: 'internal error'});
      }
    },
  },
  {
    _method: 'get',
    _path: '/product/:id',
    _function: async (req, res) => {
      try {
        const {id} = req.params;
        const result = await productService.findById(id);
        if (!(await productService.findById(id))) {
          return res.status(400).send({error: 'invalid id'});
        }
        return res.status(200).send({data: result});
      } catch (error) {
        console.error(error);
        return res.status(500).send({error: 'internal error'});
      }
    },
  },
  {
    _method: 'put',
    _path: '/product/:id',
    _function: async (req, res) => {
      try {
        const {name, price, imageUrl} = req.body;
        const {id} = req.params;

        const errors = [];
        if (!name) errors.push('name is required');
        if (!price) errors.push('price is required');
        if (!imageUrl) errors.push('imageUrl is required');
        if (errors.length) return res.status(400).send(errors);

        const result = await productService
            .findByIdAndUpdate(id, {name, price, imageUrl});
        return res.status(200).send({data: result});
      } catch (error) {
        console.error(error);
        return res.status(500).send({error: 'internal error'});
      }
    },
  },
  {
    _method: 'delete',
    _path: '/product/:id',
    _function: async (req, res) => {
      try {
        const {id} = req.params;
        if (!(await productService.findById(id))) {
          return res.status(400).send({error: 'invalid id'});
        }
        const result = await productService.findByIdAndDelete(id);
        return res.status(200).send({data: result});
      } catch (error) {
        console.error(error);
        return res.status(500).send({error: 'internal error'});
      }
    },
  },
];

module.exports = product;
