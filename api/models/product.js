const mongoose = require("mongoose");

const productScheme = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  price: { type: Number, required: true },
  productImage: { type: String },
});

module.exports = mongoose.model("Product", productScheme);
