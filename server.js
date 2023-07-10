const express = require('express');
const app = express();
const dotenv = require("dotenv");
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const photosControllers = require("./controllers/photosController")
const errorHandler = require("./middlewares/errorHandler")

dotenv.config();
// app.use(express.json());
app.use(cors({
  origin: 'http://127.0.0.1:3000'
}));

app.use("/photos", photosControllers)
app.use(errorHandler)
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
