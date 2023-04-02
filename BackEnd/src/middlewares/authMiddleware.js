const User = require("../models/noSQL/userModel.js");
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  let token;
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    try {
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const user = await User.findById(decoded.uid);
        req.user = user;
        next();
      }
    } catch (error) {
      return res.status(401).send({
        status: "Fail",
        success: false,
        message: "Token Expired",
        error: error.message,
      });
    }
  } else {
    return res.status(500).send({
      status: "Fail",
      success: false,
      message: "Error Server",
    });
  }
};

const isAdmin = async (req, res, next) => {
  try {
    const { email } = req.user;
    const adminUser = await User.findOne({ email });
    if (adminUser.rol !== "admin") {
      return res.status(401).send({
        status: "Fail",
        success: false,
        message: "Not authorized",
        error: error.message,
      });
    } else {
      next();
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

module.exports = { authMiddleware, isAdmin };
