const express = require("express");
const {
  createCoupon,
  getAllCoupons,
  updateCoupon,
  deleteCoupon,
  getCoupon
} = require("../../../controller/couponController");
const {
  authMiddleware,
  isAdmin,
} = require("../../../middlewares/authMiddleware");
const router = express.Router();

router
  .post("/", authMiddleware, isAdmin, createCoupon)
  .get("/", authMiddleware, getAllCoupons)
  .get("/:id", authMiddleware, getCoupon)
  .put("/:id", authMiddleware, isAdmin, updateCoupon)
  .delete("/:id", authMiddleware, isAdmin, deleteCoupon);

module.exports = router;
