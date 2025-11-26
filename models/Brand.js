// Import tipe data dari Sequelize (STRING, INTEGER, dll)
const { DataTypes } = require("sequelize");

// Import koneksi database dari ../db
const sequelize = require("../db");

// sequelize.define() akan membuat *Model Class* bernama "Brand".
// Model ini adalah blueprint struktur tabel "brands".
// Model digunakan untuk operasi CRUD (Brand.findAll(), Brand.create(), dll)
// dan BUKAN mengembalikan data dari database langsung.
const Brand = sequelize.define(
  "Brand", // Nama model internal
  {
    // PRIMARY KEY brand
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true, // otomatis bertambah per brand baru
      primaryKey: true,
    },

    // Nama brand (contoh: Nike, Adidas, Xiaomi)
    name: {
      type: DataTypes.STRING(100),
      allowNull: false, // wajib diisi
    },

    // Slug brand (contoh: nike, adidas, xiaomi)
    slug: {
      type: DataTypes.STRING(120),
      allowNull: true, // boleh null
    },
  },
  {
    // Nama tabel di database
    tableName: "brands",

    // Tidak memakai createdAt & updatedAt otomatis Sequelize
    timestamps: false,
  }
);

// Export model agar bisa digunakan di file lain
module.exports = Brand;
