// =========================
// 📌 IMPORT KONEKSI + MODELS
// =========================
const sequelize = require("../db");

// Import semua model
const User = require("./User");
const UserAddress = require("./UserAddress");
const Category = require("./Category");
const Brand = require("./Brand");
const Product = require("./Product");
const ProductMedia = require("./ProductMedia");
const Cart = require("./Cart");
const CartItem = require("./CartItem");
const Order = require("./Order");
const OrderItem = require("./OrderItem");
const Payment = require("./Payment");
const Shipment = require("./Shipment");

// ============================================================
// 🔗 DEFINISI RELASI ANTAR MODEL (ASSOCIATIONS)
// ============================================================

// ------------------------------------------------------------
// USER → USER ADDRESSES (1 : Many)
// ------------------------------------------------------------
User.hasMany(UserAddress, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
UserAddress.belongsTo(User, {
  foreignKey: "user_id",
});

// ------------------------------------------------------------
// CATEGORY → PRODUCTS (1 : Many)
// ------------------------------------------------------------
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});
Product.belongsTo(Category, {
  foreignKey: "category_id",
});

// ------------------------------------------------------------
// BRAND → PRODUCTS (1 : Many)
// ------------------------------------------------------------
Brand.hasMany(Product, {
  foreignKey: "brand_id",
  onDelete: "CASCADE",
});
Product.belongsTo(Brand, {
  foreignKey: "brand_id",
});

// ------------------------------------------------------------
// PRODUCT → PRODUCT MEDIA (1 : Many)
// ------------------------------------------------------------
Product.hasMany(ProductMedia, {
  foreignKey: "product_id",
  onDelete: "CASCADE",
});
ProductMedia.belongsTo(Product, {
  foreignKey: "product_id",
});

// ------------------------------------------------------------
// USER → CART (1 : 1)
// ------------------------------------------------------------
User.hasOne(Cart, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
Cart.belongsTo(User, {
  foreignKey: "user_id",
});

// ------------------------------------------------------------
// CART → CART ITEMS (1 : Many)
// ------------------------------------------------------------
Cart.hasMany(CartItem, {
  foreignKey: "cart_id",
  onDelete: "CASCADE",
});
CartItem.belongsTo(Cart, {
  foreignKey: "cart_id",
});

// ------------------------------------------------------------
// PRODUCT → CART ITEMS (1 : Many)
// ------------------------------------------------------------
Product.hasMany(CartItem, {
  foreignKey: "product_id",
  onDelete: "CASCADE",
});
CartItem.belongsTo(Product, {
  foreignKey: "product_id",
});

// ------------------------------------------------------------
// USER → ORDERS (1 : Many)
// ------------------------------------------------------------
User.hasMany(Order, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});
Order.belongsTo(User, {
  foreignKey: "user_id",
});

// ------------------------------------------------------------
// ORDER → ORDER ITEMS (1 : Many)
// ------------------------------------------------------------
Order.hasMany(OrderItem, {
  foreignKey: "order_id",
  onDelete: "CASCADE",
});
OrderItem.belongsTo(Order, {
  foreignKey: "order_id",
});

// ------------------------------------------------------------
// PRODUCT → ORDER ITEMS (1 : Many)
// ------------------------------------------------------------
Product.hasMany(OrderItem, {
  foreignKey: "product_id",
  onDelete: "SET NULL",
});
OrderItem.belongsTo(Product, {
  foreignKey: "product_id",
});

// ------------------------------------------------------------
// ORDER → PAYMENT (1 : 1)
// ------------------------------------------------------------
Order.hasOne(Payment, {
  foreignKey: "order_id",
  onDelete: "CASCADE",
});
Payment.belongsTo(Order, {
  foreignKey: "order_id",
});

// ------------------------------------------------------------
// ORDER → SHIPMENT (1 : 1)
// ------------------------------------------------------------
Order.hasOne(Shipment, {
  foreignKey: "order_id",
  onDelete: "CASCADE",
});
Shipment.belongsTo(Order, {
  foreignKey: "order_id",
});

// ============================================================
// 🔚 EXPORT SEMUA MODEL
// ============================================================
module.exports = {
  sequelize,
  User,
  UserAddress,
  Category,
  Brand,
  Product,
  ProductMedia,
  Cart,
  CartItem,
  Order,
  OrderItem,
  Payment,
  Shipment,
};
