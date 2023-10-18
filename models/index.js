// Import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Define relationships between models

// A Product belongs to a Category
Product.belongsTo(Category, {
  foreignKey: 'category_id', 
  onDelete: 'CASCADE '// The foreign key in the Product model
});

// A Product belongs to many Tags through the ProductTag model
Product.belongsToMany(Tag, {
  through: ProductTag, // The intermediate model
  foreignKey: 'product_id',
  onDelete: 'CASCADE' // The foreign key in the Product model
});

// A Tag belongs to many Products through the ProductTag model
Product.belongsToMany(Tag, {
  foreignKey: 'Product_id',
  through: {
    model: ProductTag
  } // The foreign key in the Tag model
});

Tag.belongsToMany(Product, {
  foreignKey: 'tag_id',
  through: {
    model: ProductTag
  }
});


// Export models
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};