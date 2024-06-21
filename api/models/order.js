const mongoose = require("mongoose");

const orderScheme = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" , required: true },
  quentity: { type: Number, required: true },
});

module.exports = mongoose.model("Order", orderScheme);
