// Import tipe data dari Sequelize (INTEGER, dll)
const { DataTypes } = require("sequelize");

// Import instance koneksi database dari ../db
const sequelize = require("../db");

// sequelize.define() akan membuat *Model Class* bernama "CartItem".
// Model ini adalah blueprint tabel "cart_items".
// Model dipakai untuk CRUD seperti CartItem.create(), CartItem.findAll(), dll.
// Yang dikembalikan adalah struktur model, BUKAN data cart item.
const CartItem = sequelize.define(
  "CartItem", // Nama model internal
  {
    // PRIMARY KEY cart item
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true, // otomatis bertambah
      primaryKey: true,
    },

    // Foreign Key ke tabel carts
    cart_id: {
      type: DataTypes.INTEGER,
      allowNull: false, // setiap cart item harus berada dalam satu cart
    },

    // Foreign Key ke tabel products
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false, // wajib karena cart item pasti mengacu ke 1 produk
    },

    // Jumlah produk dalam cart
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1, // default quantity = 1
    },
  },
  {
    // Nama tabel di database
    tableName: "cart_items",

    // Tidak menggunakan createdAt & updatedAt default Sequelize
    timestamps: false,
  }
);

// Export model untuk digunakan di file controller/service
module.exports = CartItem;
