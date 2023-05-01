const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    shortDescription: {
      type: String,
      required: true,
    },
    fullDescription: {
      type: String,
    },
    images: [],
    tags: String,
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
    quantity: {
      type: Number,
      require: true,
    },
    ratings: [
      {
        star: Number,
        comment: String,
        postedby: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      },
    ],
    totalrating: {
      type: String,
      default: 0,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Product", productSchema);
