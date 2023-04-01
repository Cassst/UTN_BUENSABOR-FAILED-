const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../../../controller/userController");

router
  .post("/auth/register", createUser)
  .post("/auth/login", loginUser)
  .get("/", getAllUsers)
  .get("/:userId", getUser)
  .put("/:userId", updateUser) //Habría que poner un validador de datos
  .delete("/:userId", deleteUser);

module.exports = router;
