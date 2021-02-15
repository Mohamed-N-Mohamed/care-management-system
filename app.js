//express
const express = require("express");

//dotenv
const dotenv = require("dotenv");

//morgan
const morgan = require("morgan");

//body parser
const bodyparser = require("body-parser");

//path
const path = require("path");

const app = express();

//mongodb connection
const connectDB = require('./server/database/mongo-connection');

//Port
const port = process.env.PORT || 3000;

dotenv.config({ path: "config.env" });

//parse request
app.use(bodyparser.urlencoded({ extended: true }));

//set view engine as ejs
app.set("view engine", "ejs");

//log requests
app.use(morgan("tiny"));

//mongodb connection
connectDB();

//load assets
// app.use("/js", express.static(path.resolve(__dirname, "assets/js")));
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));

//routers
app.use("/", require("./server/routes/router"));

app.listen(port, () => console.log(`Server is running on port ${port}`));
