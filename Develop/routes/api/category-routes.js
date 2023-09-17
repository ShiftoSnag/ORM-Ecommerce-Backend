const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  try {
    // Find all categories, including their associated products
    const categories = await Category.findAll({ include: [{ model: Product }] });
    res.status(200).json(categories);
  } catch (err) {
    // Handle errors by sending a 500 status with a custom message
    res.status(500).json({ message: 'not found!' });
  }
});

router.get('/:id', (req, res) => {
  try {
    // Find the category with the matching ID, including its associated products
    const category = await Category.findByPk(req.params.id, { include: [{ model: Product }] });

    // If the category is not found, send a 404 status with a custom message
    if (!category) {
      res.status(404).json({ message: 'id not found' });
      return;
    }

    res.status(200).json(category);
  } catch (err) {
    // Handle errors by sending a 500 status with a custom message
    res.status(500).json({ message: 'not found!' });
  }
});

router.post('/', (req, res) => {
  try {
    // Create a new category using the data in the request body
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    // Handle errors by sending a 400 status with a custom message
    res.status(400).json({ message: 'creation failed' });
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
