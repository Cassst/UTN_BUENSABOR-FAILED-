const express = require("express");
const {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  getallCategory,
} = require("../../../controller/categoryController");
const {
  authMiddleware,
  isAdmin,
} = require("../../../middlewares/authMiddleware");
const router = express.Router();

router
  .get("/:id", getCategory)
  .get("/", getallCategory)
  .post("/", authMiddleware, isAdmin, createCategory)
  .put("/:id", authMiddleware, isAdmin, updateCategory)
  .delete("/:id", authMiddleware, isAdmin, deleteCategory);
module.exports = router;
