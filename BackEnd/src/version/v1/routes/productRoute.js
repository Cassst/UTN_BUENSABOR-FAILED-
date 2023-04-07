const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  addToWishlist
} = require("../../../controller/productController");
const { authMiddleware, isAdmin } = require("../../../middlewares/authMiddleware");


router
    .post("/",authMiddleware,isAdmin, createProduct)
    .get("/:productId", getProduct)
    .put("/wishlist",authMiddleware, addToWishlist)
    .get("/",  getAllProducts)
    .put("/:productId",authMiddleware,isAdmin, updateProduct)
    
    .delete("/:productId",authMiddleware,isAdmin, deleteProduct);

module.exports = router;
