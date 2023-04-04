const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      unique: true,
    },
    shortDescription: {
      type: String,
      required: true,
    },
    fullDescription: {
      type: String,
    },
    pics: {
      type: Array,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    preparation: {
      prepTime: {
        type: Number,
      },
      cookTime: {
        type: Number,
      },
      totalTime: {
        type: Number,
      },
    },
    ingredients: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Stock",
        unit: Number,
      },
    ],
    slug:{
      type: String,
    },
    quantity: {
      type: Number,
      require: true,
    },
    rating: [
      {
        star: Number,
        postedby: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Product", productSchema);
