const jwt = require("jsonwebtoken");

const generateToken = (uid) => {
    const expiresIn = 60*15;
    try {
        const token = jwt.sign({ uid }, process.env.JWT_SECRET_KEY, { expiresIn });
        return { token, expiresIn };
    } catch (error) {
        return res.status(500).send({
            status: "Fail",
            success: false,
            message: "Fail Token Authentication",
            error: error.message,
          });
    }
};

module.exports = { generateToken };