const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const dbConnection = require('./src/config/database/dbConnect');
const v1AuthRoute = require('./src/version/v1/routes/authRoute');
const v1ProductsRoute = require('./src/version/v1/routes/productRoute');
const v1BlogRoute = require('./src/version/v1/routes/blogRoute');
const v1Category = require('./src/version/v1/routes/categoryRoutes');
const v1BlogCategory = require('./src/version/v1/routes/blogCategoryRoute');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());


app.use("/api/v1/user", v1AuthRoute);
app.use("/api/v1/product", v1ProductsRoute);
app.use("/api/v1/blog", v1BlogRoute);
app.use("/api/v1/category", v1Category);
app.use("/api/v1/blogcategory", v1BlogCategory);

app.listen(PORT,() => {
    dbConnection();
    console.log("😎👍 Server status: ONLINE in http://localhost:" + PORT);
});