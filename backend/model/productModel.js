const { Schema, default: mongoose } = require("mongoose");

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required."],
    },
  },
  { timestamps: true }
);

const db = mongoose.connection.useDb("shopverse");
const productModel = db.model("product", productSchema);

module.exports = productModel;
