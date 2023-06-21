const express = require("express");
const {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  getallCategory,
} = require("../../../controller/blogCategoryController");
const {
  authMiddleware,
  isAdmin,
} = require("../../../middlewares/authMiddleware");
const router = express.Router();

router
  .post("/", authMiddleware, isAdmin, createCategory)
  .put("/:id", authMiddleware, isAdmin, updateCategory)
  .delete("/:id", authMiddleware, isAdmin, deleteCategory)
  .get("/:id", getCategory)
  .get("/", getallCategory);

module.exports = router;
