const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  addToWishlist,
  rating,
} = require("../../../controller/productController");
const {
  authMiddleware,
  isAdmin,
} = require("../../../middlewares/authMiddleware");

router
  .post("/", authMiddleware, isAdmin, createProduct)
  .get("/:productId", getProduct)
  .put("/wishlist", authMiddleware, addToWishlist)
  .put("/rating", authMiddleware, rating)
  .put("/:productId", authMiddleware, isAdmin, updateProduct)
  .delete("/:productId", authMiddleware, isAdmin, deleteProduct)
  .get("/", getAllProducts);

module.exports = router;
