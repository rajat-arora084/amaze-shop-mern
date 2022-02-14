import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import products from "./data/products.js";
import connectDB from "./config/connect.js";
import productRoutes from "./routes/productRoutes.js";
import {
  customErrorHandler,
  routeNotFound,
} from "./middleware/errorMiddleware.js";

// const express = require("express");
// const dotenv = require("dotenv");
// const products = require("./data/products");

dotenv.config();
const app = express();

connectDB();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Hi");
});

app.use("/api/products", productRoutes);
app.use(customErrorHandler);
app.use(routeNotFound);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running on PORT ${PORT} in ${process.env.NODE_ENV} mode`.yellow
  )
);
