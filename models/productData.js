const mongoose = require("mongoose");
const schema = mongoose.Schema;
const productDataSchema = new schema(
  {
    productName: String,
    price: String,
  },
  {
    collection: "product",
  }
);

module.exports = mongoose.model("product", productDataSchema);
