const mongoose = require("mongoose");
const schema = mongoose.Schema;

const studentSchema = new schema(
  {
    name: String,
    collegeName: String,
    location: String,
  },
  {
    collection: "studentlist",
  }
);

module.exports = mongoose.model("studentlist", studentSchema);
