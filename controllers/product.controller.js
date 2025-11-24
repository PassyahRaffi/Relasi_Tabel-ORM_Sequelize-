const ProductService = require("../services/product.service");

exports.getAllProducts = async (req, res) => {
  const products = await ProductService.getAll();
  res.json({ status: "success", data: products });
};

exports.getProductById = async (req, res) => {
  const product = await ProductService.getById(req.params.id);
  if (!product)
    return res
      .status(404)
      .json({ status: "error", message: "Product not found" });

  res.json({ status: "success", data: product });
};

exports.createProduct = async (req, res) => {
  const newProduct = await ProductService.create(req.body);
  res.status(201).json({ status: "success", data: newProduct });
};

exports.updateProduct = async (req, res) => {
  const updated = await ProductService.update(req.params.id, req.body);
  if (!updated)
    return res
      .status(404)
      .json({ status: "error", message: "Product not found" });

  res.json({ status: "success", data: updated });
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;

  const deleted = await ProductService.delete(id);

  if (!deleted) {
    return res.status(404).json({
      status: "error",
      message: `Product with ID ${id} not found`,
    });
  }

  res.json({
    status: "success",
    message: `Product with ID ${id} has been deleted`,
    deleted_id: id,
  });
};
