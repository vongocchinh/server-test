const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    content: {
      type: String,
    },
  },
  {
    collection: "contact",
  }
);

module.exports = mongoose.model("contact", userSchema);
