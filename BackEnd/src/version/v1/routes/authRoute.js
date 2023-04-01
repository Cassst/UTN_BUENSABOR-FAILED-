const express = require('express');
const router = express.Router();
const { createUser } = require('../../../controller/userController')

router
    .post("/", createUser)
    //.get("/", getAllUsers)
    //.get("/:userId", getOneUser)
    //.put("/:userId", updateOneUser) //Habría que poner un validador de datos
    //.delete("/:userId", deleteOneUser);

module.exports = router;