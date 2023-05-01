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
  uploadImages
} = require("../../../controller/productController");
const {
  authMiddleware,
  isAdmin,
} = require("../../../middlewares/authMiddleware");
const { uploadPhoto, productImgResize } = require("../../../middlewares/uploadImages");

router
  .post("/", authMiddleware, isAdmin, createProduct)
  .get("/:productId", getProduct)
  .put("/wishlist", authMiddleware, addToWishlist)
  .put("/rating", authMiddleware, rating)
  .put("/:productId", authMiddleware, isAdmin, updateProduct)
  .put("/upload/:id", authMiddleware, isAdmin, uploadPhoto.array('images',10), uploadImages, productImgResize)
  .delete("/:productId", authMiddleware, isAdmin, deleteProduct)
  .get("/", getAllProducts);

module.exports = router;
