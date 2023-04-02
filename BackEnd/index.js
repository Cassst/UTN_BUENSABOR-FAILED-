const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const dbConnection = require('./src/config/database/dbConnect');
const v1AuthRoute = require('./src/version/v1/routes/authRoute');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/user", v1AuthRoute);

app.listen(PORT,() => {
    dbConnection();
    console.log("😎👍 Server status: ONLINE in http://localhost:" + PORT);
});