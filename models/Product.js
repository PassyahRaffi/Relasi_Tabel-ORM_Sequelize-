// Import tipe data dari Sequelize (STRING, INTEGER, DECIMAL, dll)
const { DataTypes } = require("sequelize");

// Import instance koneksi database dari ../db
const sequelize = require("../db");

// sequelize.define() akan membuat *Model Class* bernama Product.
// Model ini adalah blueprint untuk tabel "products",
// dan akan digunakan untuk operasi CRUD seperti Product.findAll(), Product.create(), dll.
// BUKAN mengembalikan data, tapi struktur model.
const Product = sequelize.define(
  "Product", // Nama model internal
  {
    // PRIMARY KEY produk
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true, // ID produk bertambah otomatis
      primaryKey: true,
    },

    // Nama produk (contoh: "Sepatu Lari X-Series")
    name: {
      type: DataTypes.STRING(200),
      allowNull: false, // nama wajib diisi
    },

    // Deskripsi detail produk
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    // Foreign Key ke tabel brand (relasi ke Brand)
    brand_id: {
      type: DataTypes.INTEGER,
      allowNull: false, // setiap produk harus punya brand
    },

    // Foreign Key ke kategori (relasi ke Category)
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false, // setiap produk harus punya kategori
    },

    // Harga produk (BIGINT karena harga bisa besar)
    price: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },

    // Stok produk (jumlah barang tersedia)
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0, // default stok 0 jika belum di-set
    },

    // Rating produk (contoh: 4.5) → DECIMAL(2,1)
    rating: {
      type: DataTypes.DECIMAL(2, 1),
      allowNull: true,
    },

    // Timestamp dibuat manual karena timestamps: false
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },

    // Timestamp update manual
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    // Nama tabel di database
    tableName: "products",

    // Menonaktifkan createdAt & updatedAt bawaan Sequelize
    // karena kamu menggunakan versi manual (created_at, updated_at)
    timestamps: false,
  }
);

// Export model agar bisa dipakai di controller/service
module.exports = Product;
