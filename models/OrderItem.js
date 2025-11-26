// Import tipe data dari Sequelize (INTEGER, STRING, BIGINT, dll)
const { DataTypes } = require("sequelize");

// Import instance koneksi database
const sequelize = require("../db");

// sequelize.define() akan membuat *Model Class* bernama "OrderItem".
// Model ini adalah blueprint tabel "order_items" untuk operasi CRUD,
// BUKAN langsung mengambil data dari database.
const OrderItem = sequelize.define(
  "OrderItem", // Nama model internal
  {
    // PRIMARY KEY order item
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true, // otomatis bertambah
      primaryKey: true,
    },

    // Foreign Key ke tabel orders
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false, // setiap order item pasti milik 1 order
    },

    // Foreign Key ke tabel products
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false, // wajib karena item harus berasal dari produk tertentu
    },

    // Snapshot nama produk saat order dibuat
    // (supaya jika produk di-update, order tidak ikut berubah)
    product_name_snapshot: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },

    // Snapshot harga produk saat order dibuat
    // (harga asli produk boleh berubah tanpa memengaruhi histori order)
    price_snapshot: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },

    // Jumlah produk yang dibeli
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1, // default quantity 1
    },
  },
  {
    // Nama tabel sebenarnya di database
    tableName: "order_items",

    // Tidak menggunakan createdAt & updatedAt default Sequelize
    timestamps: false,
  }
);

// Export model agar digunakan pada controller/service lain
module.exports = OrderItem;
