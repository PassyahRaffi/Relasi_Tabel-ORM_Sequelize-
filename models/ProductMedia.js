// Import tipe data dari Sequelize (STRING, INTEGER, TEXT, dll)
const { DataTypes } = require("sequelize");

// Import instance koneksi database dari ../db
const sequelize = require("../db");

// sequelize.define() akan membuat *Model Class* bernama "ProductMedia".
// Model ini adalah blueprint tabel "product_media".
// BUKAN mengambil data dari database, tapi membuat struktur model
// untuk operasi CRUD: ProductMedia.findAll(), ProductMedia.create(), dll.
const ProductMedia = sequelize.define(
  "ProductMedia", // Nama model internal
  {
    // PRIMARY KEY media produk
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true, // otomatis bertambah
      primaryKey: true,
    },

    // Foreign Key ke tabel produk
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false, // media harus milik 1 produk
    },

    // Tipe media, contoh: "image", "video", "thumbnail"
    media_type: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },

    // URL file media (bisa URL Cloudinary, S3, lokal, dll)
    url: {
      type: DataTypes.TEXT,
      allowNull: false, // wajib karena media harus punya sumber file
    },
  },
  {
    // Nama tabel real di database
    tableName: "product_media",

    // Tidak menggunakan createdAt & updatedAt default Sequelize
    timestamps: false,
  }
);

// Export model untuk digunakan di controller/service
module.exports = ProductMedia;
