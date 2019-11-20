const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
//   username: { type: String, required: true },
//   description: { type: String, required: true },
//   duration: { type: Number, required: true },
//   date: { type: Date, required: true },
  original_price: {type: DEC(6,2), required: true },
  sales_price: {type: DEC(6,2), required: true},
  hyperlink:  {type: LONGTEXT, required: true},
  ProductName: {type:VARCHAR(30)}
}, {
  timestamps: true,
});

const Products = mongoose.model('myProduct', ProductSchema);

module.exports = Products;