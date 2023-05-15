const express = require("express");
const router = express.Router();
const {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
  likeBlog,
  dislikeBlog,
  uploadImages
} = require("../../../controller/blogcontroller");
const {
  authMiddleware,
  isAdmin,
} = require("../../../middlewares/authMiddleware");
const { uploadPhoto, blogImgResize } = require("../../../middlewares/uploadImages");

router
  .put("/dislikes", authMiddleware, dislikeBlog)
  .put("/likes", authMiddleware, likeBlog)
  .post("/", authMiddleware, isAdmin, createBlog)
  .put("/:id", authMiddleware, isAdmin, updateBlog)
  .get("/:id", getBlog)
  .get("/", getAllBlogs)
  .put("/upload/:id", authMiddleware, isAdmin, uploadPhoto.array('images',2), uploadImages, blogImgResize)
  .delete("/:id", authMiddleware, isAdmin, deleteBlog);

module.exports = router;
