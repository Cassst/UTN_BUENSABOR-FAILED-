const express = require('express');
const router = express.Router();
const { createUser, loginUser } = require('../../../controller/userController')

router
    .post("/register", createUser)
    .post("/login", loginUser)
    //.get("/", getAllUsers)
    //.get("/:userId", getOneUser)
    //.put("/:userId", updateOneUser) //Habría que poner un validador de datos
    //.delete("/:userId", deleteOneUser);

module.exports = router;