// Import tipe data dari Sequelize (INTEGER, DATE, dll)
const { DataTypes } = require("sequelize");

// Import instance koneksi database dari ../db
const sequelize = require("../db");

// sequelize.define() akan membuat *Model Class* bernama "Cart".
// Model ini adalah blueprint tabel "carts", digunakan untuk CRUD seperti:
// Cart.findOne(), Cart.create(), dsb.
// BUKAN mengembalikan data dari database langsung.
const Cart = sequelize.define(
  "Cart", // Nama model internal
  {
    // PRIMARY KEY cart
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true, // otomatis bertambah
      primaryKey: true,
    },

    // Foreign Key ke user (1 user bisa punya banyak cart session)
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false, // cart harus dimiliki user yang valid
    },

    // Timestamp ketika cart dibuat
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, // otomatis isi waktu saat dibuat
    },
  },
  {
    // Nama tabel di database
    tableName: "carts",

    // Tidak menggunakan createdAt & updatedAt otomatis Sequelize
    timestamps: false,
  }
);

// Export model untuk digunakan di controller/service
module.exports = Cart;
