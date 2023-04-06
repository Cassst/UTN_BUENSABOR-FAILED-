const User = require("../models/noSQL/userModel");
const jwt = require("jsonwebtoken");
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
    });

  const refreshToken = cookie.refreshToken;

  const user = await User.findOne({ refreshToken });

  if (!user)
    return res.status(401).send({
      status: "Fail",
      success: false,
      message: "No Match found",
    });

  jwt.verify(refreshToken, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err || user.id !== decoded.uid) {
      return res.status(401).send({
        status: "Fail",
        success: false,
        message: "There is something wrong with refresh token",
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
    });
  }
};

const forgotPasswordToken = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found with this email");
  try {
    const token = await user.createPasswordResetToken();
    console.log("___________");
    console.log("token: " + token);
    await user.save();
    const resetURL = `Hi, Please follow this link to reset Your Password. This link is valid till 10 minutes from now. <a href='http://localhost:5000/api/user/reset-password/${token}'>Click Here</>`;
    const data = {
      to: email,
      text: "Hey User",
      subject: "Forgot Password Link",
      htm: resetURL,
    };
    sendEmail(data);
    res.json(token);
  } catch (error) {
    return res.status(500).send({
      status: "Fail",
      success: false,
      message: "The password cant be changed",
      error,
    });
  }
  /*
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).send({
      status: "Fail",
      success: false,
      message: "User not found",
    });
  }

  try {
    const token = await user.createPasswordResetToken();
    await user.save();
    const resetURL = `Hi, Please follow this link to reset Your Password. This link is valid till 10 minutes from now. <a href='http://localhost:5000/api/user/reset- password/${token}'>Click Here</>`;
    const data = {
      to: email,
      text: "Hey User",
      subject: "Forgot Password Link",
      htm: resetURL,
    };
    sendEmail(data);
    console.log(token);
  } catch (error) {
    return res.status(500).send({
      status: "Fail",
      success: false,
      message: "The password cant be changed",
    });
  }*/
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
};
