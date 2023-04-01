const User = require("../models/noSQL/userModel");

const createUser = async (req, res) => {
  try {
    const email = req.body.email;
    const findUser = await User.findOne({ email });

    if (!findUser) {
      const newUser = User.create(req.body);
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
    if ( findUser && await findUser.comparePassword(password)) {
        res.status(200).send({ status: "Success", success: true, message: "Access Granted" });
    }else {
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

module.exports = { createUser, loginUser };
