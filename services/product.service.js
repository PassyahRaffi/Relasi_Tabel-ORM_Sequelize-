const Product = require("../models/Product");

class ProductService {
  async getAll() {
    return await Product.findAll();
  }

  async getById(id) {
    return await Product.findByPk(id);
  }

  async create(data) {
    return await Product.create(data);
  }

  async update(id, data) {
    const product = await Product.findByPk(id);
    if (!product) return null;
    return await product.update(data);
  }

  async delete(id) {
    const product = await Product.findByPk(id);
    if (!product) return false;
    await product.destroy();
    return true;
  }
}

module.exports = new ProductService();
