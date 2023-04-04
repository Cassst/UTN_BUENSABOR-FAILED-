const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct
} = require("../../../controller/productController");
const { authMiddleware, isAdmin } = require("../../../middlewares/authMiddleware");


router
    .post("/",authMiddleware,isAdmin, createProduct)
    .get("/:productId", getProduct)
    .get("/",  getAllProducts)
    .put("/:productId",authMiddleware,isAdmin, updateProduct)
    .delete("/:productId",authMiddleware,isAdmin, deleteProduct);

module.exports = router;
