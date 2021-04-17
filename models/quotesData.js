const mongoose = require("mongoose");
const schema = mongoose.Schema;

const quoteSchema = new schema(
  {
    quote: String,
    author: String,
  },
  { collection: "quotes" }
);

module.exports = mongoose.model("quotes", quoteSchema);
