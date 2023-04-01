const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 3001;

const dbConnection = require('./src/config/database/dbConnect');
const v1AuthRoute = require('./src/version/v1/routes/authRoute');


app.use(express.json());
app.use(cors());

app.use("/api/v1/user", v1AuthRoute);

app.use('/', (req,res) => {
    res.send("Hello World");
});

app.listen(PORT,() => {
    dbConnection();
    console.log("😎👍 Server status: ONLINE in http://localhost:" + PORT);
});