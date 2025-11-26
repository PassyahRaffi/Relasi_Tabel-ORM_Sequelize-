// Import tipe data dari Sequelize (STRING, INTEGER, BIGINT, DATE, dll)
const { DataTypes } = require("sequelize");

// Import instance koneksi database dari ../db
const sequelize = require("../db");

// sequelize.define() membuat *Model Class* bernama "Order".
// Model ini adalah blueprint tabel "orders" dan digunakan untuk CRUD seperti:
// Order.findAll(), Order.create(), Order.update(), dll.
// Model bukan mengembalikan data dari database, tetapi struktur class-nya.
const Order = sequelize.define(
  "Order", // Nama model internal
  {
    // PRIMARY KEY pesanan
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true, // otomatis bertambah saat order baru dibuat
      primaryKey: true,
    },

    // ID user yang membuat order (foreign key)
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false, // setiap order harus dimiliki oleh 1 user
    },

    // Status pesanan memakai ENUM agar hanya boleh salah satu dari nilai ini
    status: {
      type: DataTypes.ENUM(
        "PENDING",
        "PAID",
        "SHIPPED",
        "DELIVERED",
        "COMPLETED",
        "CANCELED"
      ),
      allowNull: false,
      defaultValue: "PENDING", // status default saat order baru dibuat
    },

    // Total harga semua produk dalam order
    total_amount: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },

    // Biaya ongkir
    shipping_cost: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },

    // Metode pembayaran (contoh: COD, Transfer Bank, Credit Card)
    payment_method: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },

    // Timestamp order dibuat
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },

    // Timestamp order di-update
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    // Nama tabel di database
    tableName: "orders",

    // Tidak memakai createdAt & updatedAt bawaan Sequelize
    timestamps: false,
  }
);

// Export model agar bisa digunakan di controller/service lain
module.exports = Order;
