const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let blogSchema = new Schema(
  {
    title: {
      type: String,
    },
    des: {
      type: String,
    },
  },
  {
    collection: "blog",
  }
);

module.exports = mongoose.model("blog", blogSchema);
