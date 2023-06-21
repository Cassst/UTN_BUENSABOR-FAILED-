const User = require("../models/noSQL/userModel");
const Product = require("../models/noSQL/productModel");
const Cart = require("../models/noSQL/cartModel");
const Coupon = require("../models/noSQL/couponModel");
const Order = require("../models/noSQL/orderModel");
const uniqid = require("uniqid");

const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { generateToken } = require("../config/JWTToken");
const validateMongoDBID = require("../utils/validateMongoDB");
const { generateRefreshToken } = require("../config/refreshToken");
const sendEmail = require("./emailController");

const createUser = async (req, res) => {
  try {
    const email = req.body.email;
    const findUser = await User.findOne({ email });

    if (!findUser) {
      const newUser = await User.create(req.body);
      return res
        .status(201)
        .send({ status: "Success", success: true, message: "Registered User" });
    } else {
      return res.status(409).send({
        status: "Fail",
        success: false,
        message: "User Already Exists",
        error: error.message,
      });
    }
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        status: "Fail",
        success: false,
        message: "Duplicate Data",
        error: error.message,
      });
    }
    return res.status(500).send({
      status: "Fail",
      success: false,
      message: "Error Server",
      error: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await User.findOne({ email });

    if (findUser && (await findUser.comparePassword(password))) {
      const token = generateToken(findUser.id);

      const refreshToken = await generateRefreshToken(findUser?._id);
      const updateuser = await User.findByIdAndUpdate(
        findUser.id,
        {
          refreshToken: refreshToken,
        },
        { new: true }
      );
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 72 * 60 * 60 * 1000,
      });
      res.status(200).send({
        status: "Success",
        success: true,
        message: "Access Granted",
        token,
      });
    } else {
      return res.status(401).send({
        status: "Fail",
        success: false,
        message: "Wrong Credentials",
        error: error.message,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      status: "Fail",
      success: false,
      message: "Error Server",
      error: error.message,
    });
  }
};

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findAdmin = await User.findOne({ email });

    if (findAdmin.rol !== "admin") {
      res.status(400).send({
        status: "Fail",
        success: false,
        message: "Not Authorized",
        token,
      });
    }

    if (findAdmin && (await findAdmin.comparePassword(password))) {
      const token = generateToken(findAdmin.id);

      const refreshToken = await generateRefreshToken(findAdmin?._id);
      const updateuser = await User.findByIdAndUpdate(
        findAdmin.id,
        {
          refreshToken: refreshToken,
        },
        { new: true }
      );
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 72 * 60 * 60 * 1000,
      });
      res.status(200).send({
        status: "Success",
        success: true,
        message: "Access Granted",
        token,
      });
    } else {
      return res.status(401).send({
        status: "Fail",
        success: false,
        message: "Wrong Credentials",
        error: error.message,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      status: "Fail",
      success: false,
      message: "Error Server",
      error: error.message,
    });
  }
};

const saveAddress = async (req, res) => {
   const { _id } = req.user;
   try {
    const updatedUser = await User.findByIdAndUpdate(_id,
      {
        address: req?.body?.address,
      },
      {
        new:true,
      });
      return res.status(200).send({
        status: "Success",
        success: true,
        message: "Address Updated",
      });
   } catch (error) {
    return res.status(500).send({
      status: "Fail",
      success: false,
      message: "Error Server",
      error: error.message,
    });
   } 
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    const formatedUser = users.map((users) => {
      const { id, fullName, bornDate, gender, phone, email, rol, address } =
        users;
      return { id, fullName, bornDate, gender, phone, email, rol, address };
    });
    res.status(200).send({
      status: "Success",
      success: true,
      message: "All Users",
      users: formatedUser,
    });
  } catch (error) {
    return res.status(500).send({
      status: "Fail",
      success: false,
      message: "Error Server",
      error: error.message,
    });
  }
};

const getUser = async (req, res) => {
  try {
    let user = await User.findById(req.params.userId);
    validateMongoDBID(req.params.userId);
    const { id, fullName, bornDate, gender, phone, email, rol, address } = user;

    return res.status(200).send({
      status: "Success",
      success: true,
      message: "User Details",
      user: { id, fullName, bornDate, gender, phone, email, rol, address },
    });
  } catch (error) {
    return res.status(500).send({
      status: "Fail",
      success: false,
      message: "Error Server",
      error: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  const { _id } = req.user;
  validateMongoDBID(_id);
  try {
    const { fullName, email, password, bornDate, gender, phone, address } =
      req.body;
    let userUpdated = await User.findOneAndUpdate(
      _id,
      {
        fullName,
        email,
        password,
        bornDate,
        gender,
        phone,
        address,
      },
      {
        new: true,
      }
    );

    return res.status(200).send({
      status: "Success",
      success: true,
      message: "User Updated",
    });
  } catch (error) {
    return res.status(500).send({
      status: "Fail",
      success: false,
      message: "Error Server",
      error: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.userId);
    validateMongoDBID(req.params.userId);
    return res.status(200).send({
      status: "Success",
      success: true,
      message: "User Removed",
    });
  } catch (error) {
    return res.status(500).send({
      status: "Fail",
      success: false,
      message: "Error Server",
      error: error.message,
    });
  }
};

const blockUser = async (req, res) => {
  const id = req.params.userId;
  try {
    const block = await User.findByIdAndUpdate(
      id,
      {
        isBlocked: true,
      },
      {
        new: true,
      }
    );
    return res.status(200).send({
      status: "Success",
      success: true,
      message: "User Blocked",
    });
  } catch (error) {
    return res.status(500).send({
      status: "Fail",
      success: false,
      message: "Error Server",
      error: error.message,
    });
  }
};

const unblockUser = async (req, res) => {
  const id = req.params.userId;
  try {
    const unblock = await User.findByIdAndUpdate(
      id,
      {
        isBlocked: false,
      },
      {
        new: true,
      }
    );
    return res.status(200).send({
      status: "Success",
      success: true,
      message: "User Unlocked",
    });
  } catch (error) {
    return res.status(500).send({
      status: "Fail",
      success: false,
      message: "Error Server",
      error: error.message,
    });
  }
};

const handleRefreshToken = async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken)
    return res.status(401).send({
      status: "Fail",
      success: false,
      message: "No refresh token in session",
      error: error.message,
    });

  const refreshToken = cookie.refreshToken;

  const user = await User.findOne({ refreshToken });

  if (!user)
    return res.status(401).send({
      status: "Fail",
      success: false,
      message: "No Match found",
      error: error.message,
    });

  jwt.verify(refreshToken, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err || user.id !== decoded.uid) {
      return res.status(401).send({
        status: "Fail",
        success: false,
        message: "There is something wrong with refresh token",
        error: error.message,
      });
    }
    const accessToken = generateToken(user?._id);
    res.status(200).send({
      status: "Success",
      success: true,
      message: "Access token Refreshed",
      token: accessToken,
    });
  });
};

const logout = async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken)
    return res.status(401).send({
      status: "Fail",
      success: false,
      message: "No refresh token in session",
      error: error.message,
    });

  const refreshToken = cookie.refreshToken;

  const user = await User.findOne({ refreshToken });

  if (!user) {
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
    });
    return res.sendStatus(204);
  }
  await User.findOneAndUpdate(refreshToken, {
    refreshToken: "",
  });
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: true,
  });
  res.sendStatus(204);
};

const updatePassword = async (req, res) => {
  const { _id } = req.user;
  const { password } = req.body;
  validateMongoDBID(_id);
  const user = await User.findById(_id);
  if (password) {
    user.password = password;
    const updatedPassword = await user.save();
    return res.status(200).send({
      status: "Success",
      success: true,
      message: "Password Updated",
    });
  } else {
    return res.status(500).send({
      status: "Fail",
      success: false,
      message: "The password cant be changed",
      error: error.message,
    });
  }
};

const forgotPasswordToken = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found with this email");
  try {
    const token = await user.createPasswordResetToken();
    await user.save();
    const resetURL = `Hi, Please follow this link to reset Your Password. This link is valid till 10 minutes from now. <a href='http://localhost:5000/api/v1/user/reset-password/${token}'>Click Here</>`;
    const data = {
      to: email,
      text: "Hey User",
      subject: "Forgot Password Link",
      htm: resetURL,
    };
    sendEmail(data);
    res.json("Token has been sent");
  } catch (error) {
    return res.status(500).send({
      status: "Fail",
      success: false,
      message: "The password cant be changed",
      error: error.message,
    });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { password } = req.body;
    const { token } = req.params;
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
    const user = await User.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() },
    });
    console.log(user);
    if (!user) res.json(" Token Expired, Please try again later");
    user.password = password;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();
    res.send({ status: "Success", success: true, message: "Password reset" });
  } catch (error) {
    return res.status(500).send({
      status: "Fail",
      success: false,
      message: "The password cant be changed at reset",
      error: error.message,
    });
  }
};

const getWishList = async (req, res) => {
  const { _id } = req.user;
  try {
    const findUser = await User.findById(_id).populate('wishlist');
    res.json(findUser);
  } catch (error) {
    return res.status(500).send({
      status: "Fail",
      success: false,
      message: "User could not be found",
      error: error.message,
    });
  }
};

const userCart = async (req, res) => {
  const { _id } = req.user;
  const { cart } = req.body;
  try {
    let products = [];
    const user = await User.findById(_id);
    // check if user already have product in cart
    const alreadyExistCart = await Cart.findOne({ orderby: user._id });
    if (alreadyExistCart) {
      alreadyExistCart.remove();
    }
    for (let i = 0; i < cart.length; i++) {
      let object = {};
      object.product = cart[i]._id;
      object.count = cart[i].count;
      object.color = cart[i].color;
      let getPrice = await Product.findById(cart[i]._id).select("price").exec();
      object.price = getPrice.price;
      products.push(object);
    }
    let cartTotal = 0;
    for (let i = 0; i < products.length; i++) {
      cartTotal = cartTotal + products[i].price * products[i].count;
    }
    let newCart = await new Cart({
      products,
      cartTotal,
      orderby: user?._id,
    }).save();
    res.json(newCart);
  } catch (error) {
    return res.status(500).send({
      status: "Fail",
      success: false,
      message: error,
    });
  }
}; 

const getUserCart = async (req, res) => {
  const { _id } = req.user;
  try {
    const cart = await Cart.findOne({ orderby: _id }).populate(
      "products.product"
    );
    res.json(cart);
  } catch (error) {
    return res.status(500).send({
      status: "Fail",
      success: false,
      message: error,
    });
  }
};

const emptyCart = async (req, res) => {
  if (!req.user || !req.user.email) {
    return res.status(401).send({
      status: "Fail",
      success: false,
      message: "Unauthorized",
    });
  }

  const { _id } = req.user;

  try {
    const user = await User.findOne({ _id });
    const cart = await Cart.findOneAndRemove({ orderby: user._id });
    res.json(cart);
  } catch (error) {
    return res.status(500).send({
      status: "Fail",
      success: false,
      message: error,
    });
  }
};

const applyCoupon = async (req, res) => {
  const { coupon } = req.body;
  const { _id } = req.user;
  const validCoupon = await Coupon.findOne({ name: coupon });
  if (validCoupon === null) {
    return res.status(404).json({
      status: "Fail",
      success: false,
      message: "The coupon provided is not valid",
    });
  }
  const user = await User.findById(_id);
  const { cartTotal } = await Cart.findOne({ orderby: user._id }).populate("products.product");
  const totalAfterDiscount = (cartTotal - (cartTotal * validCoupon.discount) / 100).toFixed(2);
  const updatedCart = await Cart.findOneAndUpdate(
    { orderby: user._id },
    { totalAfterDiscount },
    { new: true }
  );
  res.json(totalAfterDiscount);
};

const createOrder = async (req, res) => {
  const { COD, couponApplied } = req.body;
  const { _id } = req.user;
  try {
    if (!COD) {
      return res.status(400).json({
        status: "Fail",
        success: false,
        message: "Missing COD field in the request",
      });
    }
    const user = await User.findById(_id);
    let userCart = await Cart.findOne({ orderby: user._id });
    if (!userCart) {
      return res.status(404).json({
        status: "Fail",
        success: false,
        message: "User cart not found",
      });
    }

    let finalAmount = 0;
    if (couponApplied && userCart.totalAfterDiscount) {
      finalAmount = userCart.totalAfterDiscount;
    } else {
      finalAmount = userCart.cartTotal;
    }

    let newOrder = await new Order({
      products: userCart.products,
      paymentIntent: {
        id: uniqid(),
        method: "COD",
        amount: finalAmount,
        status: "Cash on Delivery",
        created: Date.now(),
        currency: "ARS",
      },
      orderby: user._id,
      orderStatus: "Cash on Delivery",
    }).save();

    let update = userCart.products.map((item) => {
      return {
        updateOne: {
          filter: { _id: item.product._id },
          update: { $inc: { quantity: -item.count, sold: +item.count } },
        },
      };
    });

    const updated = await Product.bulkWrite(update, {});
    res.json({ message: "success" });
  } catch (error) {
    return res.status(500).json({
      status: "Fail",
      success: false,
      message: "Failed to create the order",
      error: error.message,
    });
  }
};

const getOrders = async (req, res) => {
  const { _id } = req.user;
  try {
    const userOrders = await Order.find({ orderby: _id })
      .populate("products.product")
      .populate("orderby")
      .exec();
    res.json(userOrders);
  } catch (error) {
    return res.status(500).json({
      status: "Fail",
      success: false,
      message: "Failed to retrieve the orders",
      error: error.message,
    });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const alluserorders = await Order.find()
      .populate("products.product")
      .populate("orderby")
      .exec();
    res.json(alluserorders);
  } catch (error) {
    return res.status(500).json({
      status: "Fail",
      success: false,
      message: "Failed to retrieve all orders",
      error: error.message,
    });
  }
};

const getOrderByUserId = async (req, res) => {
  const { id } = req.params;
  try {
    const userorders = await Order.findOne({ orderby: id })
      .populate("products.product")
      .populate("orderby")
      .exec();
    res.json(userorders);
  } catch (error) {
    return res.status(500).json({
      status: "Fail",
      success: false,
      message: "Failed to get orders by the user",
      error: error.message,
    });
  }
};

const updateOrderStatus = async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;
  try {
    const updateOrderStatus = await Order.findByIdAndUpdate(
      id,
      {
        orderStatus: status,
        paymentIntent: {
          status: status,
        },
      },
      { new: true }
    );
    res.json(updateOrderStatus);
  } catch (error) {
    return res.status(500).json({
      status: "Fail",
      success: false,
      message: "Failed to update the order",
      error: error.message,
    });
  }
};


module.exports = {
  createUser,
  loginUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
  blockUser,
  unblockUser,
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
  createOrder,
  getOrders,
  getAllOrders,
  updateOrderStatus,
  getOrderByUserId
};
