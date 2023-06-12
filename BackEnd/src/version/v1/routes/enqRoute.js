const express = require("express");
const {
  createEnquiry,
  updateEnquiry,
  deleteEnquiry,
  getEnquiry,
  getallEnquiry,
} = require("../../../controller/enqController");
const { authMiddleware, isAdmin } = require("../../../middlewares/authMiddleware");
const router = express.Router();

router
    .post("/", createEnquiry)
    .put("/:id", authMiddleware, isAdmin, updateEnquiry)
    .delete("/:id", authMiddleware, isAdmin, deleteEnquiry)
    .get("/:id", getEnquiry)
    .get("/", getallEnquiry);

module.exports = router;