const sequelize = require("../db");

// Import semua model
const User = require("./User");
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

/* ================================
   🔗 START: DEFINISIKAN RELASI
================================ */

// CATEGORY 1 ---> MANY PRODUCTS
Category.hasMany(Product, { foreignKey: "category_id" });
Product.belongsTo(Category, { foreignKey: "category_id" });

// BRAND 1 ---> MANY PRODUCTS
Brand.hasMany(Product, { foreignKey: "brand_id" });
Product.belongsTo(Brand, { foreignKey: "brand_id" });

// PRODUCT 1 ---> MANY PRODUCT MEDIA
Product.hasMany(ProductMedia, { foreignKey: "product_id" });
ProductMedia.belongsTo(Product, { foreignKey: "product_id" });

// USER 1 ---> 1 CART
User.hasOne(Cart, { foreignKey: "user_id" });
Cart.belongsTo(User, { foreignKey: "user_id" });

// CART 1 ---> MANY CART ITEMS
Cart.hasMany(CartItem, { foreignKey: "cart_id" });
CartItem.belongsTo(Cart, { foreignKey: "cart_id" });

// PRODUCT 1 ---> MANY CART ITEMS
Product.hasMany(CartItem, { foreignKey: "product_id" });
CartItem.belongsTo(Product, { foreignKey: "product_id" });

// USER 1 ---> MANY ORDERS
User.hasMany(Order, { foreignKey: "user_id" });
Order.belongsTo(User, { foreignKey: "user_id" });

// ORDER 1 ---> MANY ORDER ITEMS
Order.hasMany(OrderItem, { foreignKey: "order_id" });
OrderItem.belongsTo(Order, { foreignKey: "order_id" });

// PRODUCT 1 ---> MANY ORDER ITEMS
Product.hasMany(OrderItem, { foreignKey: "product_id" });
OrderItem.belongsTo(Product, { foreignKey: "product_id" });

// ORDER 1 ---> 1 PAYMENT
Order.hasOne(Payment, { foreignKey: "order_id" });
Payment.belongsTo(Order, { foreignKey: "order_id" });

// ORDER 1 ---> 1 SHIPMENT
Order.hasOne(Shipment, { foreignKey: "order_id" });
Shipment.belongsTo(Order, { foreignKey: "order_id" });

/* ================================
   🔗 END
================================ */

module.exports = {
  sequelize,
  User,
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
