const Coupon = require("../models/noSQL/couponModel.js");
const validateMongoDbId = require("../utils/validateMongoDB.js");

const createCoupon = async (req, res) => {
  try {
    const newCoupon = await Coupon.create(req.body);
    return res
      .status(201)
      .send({ status: "Success", success: true, message: "New coupon create" });
  } catch (error) {
    return res.status(409).send({
      status: "Fail",
      success: false,
      message: "Coupon Already Exists",
    });
  }
};

const getAllCoupons = async (req, res) => {
  try {
    const coupons = await Coupon.find();
    return res.status(201).send({
      status: "Success",
      success: true,
      message: "All coupons avaible",
      coupons,
    });
  } catch (error) {
    return res.status(409).send({
      status: "Fail",
      success: false,
      message: "Internal Server Error",
    });
  }
};

const updateCoupon = async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatecoupon = await Coupon.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).send({
      status: "Success",
      success: true,
      message: "Coupon has been updated",
      coupon: updatecoupon,
    });
  } catch (error) {
    return res.status(409).send({
      status: "Fail",
      success: false,
      message: "Internal Server Error",
    });
  }
};

const deleteCoupon = async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletecoupon = await Coupon.findByIdAndDelete(id);
    return res.status(200).send({
      status: "Success",
      success: true,
      message: "Coupon has been deleted successfully",
    });
  } catch (error) {
    return res.status(409).send({
      status: "Fail",
      success: false,
      message: "Internal Server Error",
    });
  }
};

const getCoupon = async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getAcoupon = await Coupon.findById(id);
    return res.status(200).send({
      status: "Success",
      success: true,
      message: "Coupon Information",
      coupon: getAcoupon,
    });
  } catch (error) {
    return res.status(409).send({
      status: "Fail",
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  createCoupon,
  getAllCoupons,
  updateCoupon,
  deleteCoupon,
  getCoupon,
};
