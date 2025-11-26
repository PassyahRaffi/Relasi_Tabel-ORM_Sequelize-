// Import tipe data dari Sequelize (STRING, INTEGER, DATE, dll)
const { DataTypes } = require("sequelize");

// Import instance koneksi database dari ../db
const sequelize = require("../db");

// sequelize.define() membuat *Model Class* bernama "Shipment".
// Model ini adalah blueprint tabel "shipments".
// Model digunakan untuk operasi CRUD seperti Shipment.findAll(), Shipment.create(), dll.
// Bukan mengembalikan data langsung dari database, tetapi struktur model.
const Shipment = sequelize.define(
  "Shipment", // Nama model internal
  {
    // PRIMARY KEY shipment
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true, // otomatis bertambah untuk setiap shipment baru
      primaryKey: true,
    },

    // Foreign Key ke tabel orders
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false, // shipment harus terkait ke order tertentu
    },

    // Nama kurir pengiriman (JNE, J&T, SiCepat, AnterAja, DHL, dsb.)
    courier: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },

    // Nomor resi / tracking number dari kurir
    tracking_number: {
      type: DataTypes.STRING(100),
      allowNull: true, // bisa null jika resi belum tersedia
    },

    // Status pengiriman (PENDING, SHIPPED, IN_TRANSIT, DELIVERED, FAILED)
    status: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "PENDING",
    },

    // Waktu paket dikirim
    shipped_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    // Waktu paket diterima oleh penerima
    delivered_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    // Nama tabel fisik dalam database
    tableName: "shipments",

    // Tidak memakai createdAt & updatedAt bawaan Sequelize
    timestamps: false,
  }
);

// Export model agar bisa dipakai di controller/service
module.exports = Shipment;
