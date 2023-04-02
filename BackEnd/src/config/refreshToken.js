const jwt = require("jsonwebtoken");

const generateRefreshToken = (uid) => {
    const expiresIn = 1000 * 60 * 60 * 24 * 30;
    try {
        return token = jwt.sign({ uid }, process.env.JWT_SECRET_KEY, { expiresIn });
    } catch (error) {
        return res.status(500).send({
            status: "Fail",
            success: false,
            message: "Fail Token Authentication",
            error: error.message,
          });
    }
};

module.exports = { generateRefreshToken };