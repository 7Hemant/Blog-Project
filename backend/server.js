const express = require("express");
const bodypaser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv").config();
const fileUpload = require("express-fileupload");
//import files
const AuthRoute = require("./routes/AuthRoutes");
const BlogRoute = require("./routes/BlogRoutes");
const ConnectedDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");
const app = express();
app.use(bodypaser.json());
app.use(cors());

app.use(fileUpload());
app.use("/api/v1/blog", AuthRoute);
app.use("/api/v1/blog", BlogRoute);
app.use("/api/v1/blog", errorHandler);

ConnectedDB().then(() => app.listen(process.env.PORT));
