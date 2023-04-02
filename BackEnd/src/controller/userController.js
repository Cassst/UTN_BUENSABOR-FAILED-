const User = require("../models/noSQL/userModel");
const { generateToken } = require("../config/JWTToken");
const validateMongoDBID = require("../utils/validateMongoDB");



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
  const  id  = req.params.userId;
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
  const  id  = req.params.userId;
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

module.exports = {
  createUser,
  loginUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
  blockUser,
  unblockUser,
};
