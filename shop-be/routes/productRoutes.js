import express from "express";
import asyncHandler from "express-async-handler";
import products from "../data/products.js";
import Product from "./../models/product.js";

const router = express.Router();

// @desc Fetch all products
// @route GET /api/products
// @access PUBLIC
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

// @desc Fetch single product
// @route GET /api/products/:id
// @access PUBLIC
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    console.log("prpr", req.params.id);

    await Product.findById(req.params.id)
      .then((product) => res.json(product))
      .catch((err) => {
        res.status(404);
        throw new Error("Product not found");
      });
  })
);

export default router;
