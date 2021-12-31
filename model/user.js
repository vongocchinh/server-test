const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    firstName: {
      type: String,
    },
    email: {
      type: String,
    },
    lastName: {
      type: String,
    },
  },
  {
    collection: "user",
  }
);

module.exports = mongoose.model("user", userSchema);
