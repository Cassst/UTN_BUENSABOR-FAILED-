const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUser,
  getAllUsers,
  getUser,
  updateUser,
  blockUser,
  unblockUser,
  deleteUser,
  handleRefreshToken,
  logout,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  loginAdmin,
  getWishList,
  saveAddress,
  userCart,
  getUserCart,
  emptyCart,
  applyCoupon,
  createOrder
} = require("../../../controller/userController");

const { authMiddleware, isAdmin } = require("../../../middlewares/authMiddleware");

router
  .post("/auth/register",createUser)
  .post("/auth/login",loginUser)
  .post("/auth/loginAdmin",loginAdmin)
  .post("/cart",authMiddleware , userCart)
  .post("/forgot-password-token", forgotPasswordToken)
  .post("/cart/apply_cupon",authMiddleware, applyCoupon)
  .post("/cart/cash_order",authMiddleware, createOrder)
  .get("/wishlist",authMiddleware, getWishList)
  .get("/cart",authMiddleware, getUserCart)
  .get("/",getAllUsers)
  .get("/refresh",handleRefreshToken)
  .get("/logout",logout)
  .get("/:userId",authMiddleware, isAdmin, getUser)
  .put("/",authMiddleware, updateUser)
  .put("/updatedPassword",authMiddleware, updatePassword)
  .put("/save_address",authMiddleware, saveAddress)
  .put("/reset-password/:token",resetPassword)
  .put("/block_user/:userId",authMiddleware, isAdmin, blockUser)
  .put("/unblock_user/:userId",authMiddleware, isAdmin, unblockUser)
  .delete("/empty_cart",authMiddleware, emptyCart)
  .delete("/:userId",isAdmin, deleteUser);

module.exports = router;
