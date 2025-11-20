// backend/controllers/product.controller.js
const Product = require("../models/Product");

// GET all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json({
      status: "success",
      data: products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Server error" });
  }
};

// GET product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);

    if (!product) {
      return res.status(404).json({
        status: "error",
        message: "Product not found",
      });
    }

    res.json({
      status: "success",
      data: product,
    });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Server error" });
  }
};

// CREATE product
exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({
      status: "success",
      message: "Product created",
      data: product,
    });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Server error" });
  }
};

// UPDATE product
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);

    if (!product) {
      return res.status(404).json({
        status: "error",
        message: "Product not found",
      });
    }

    await product.update(req.body);

    res.json({
      status: "success",
      message: "Product updated",
      data: product,
    });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Server error" });
  }
};

// DELETE product
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);

    if (!product) {
      return res.status(404).json({
        status: "error",
        message: "Product not found",
      });
    }

    await product.destroy();

    res.json({
      status: "success",
      message: "Product deleted",
    });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Server error" });
  }
};
