// Import tipe data dari Sequelize (STRING, INTEGER, BOOLEAN, dll)
const { DataTypes } = require("sequelize");

// Import instance koneksi database dari file ../db
const sequelize = require("../db");

// sequelize.define() akan mengembalikan sebuah *Model Class* bernama "UserAddress".
// Model ini adalah blueprint untuk tabel user_addresses. 
// BUKAN mengambil data dari database, tapi membuat struktur model
// yang digunakan untuk CRUD: UserAddress.findAll(), UserAddress.create(), dll.
const UserAddress = sequelize.define(
  "UserAddress", // Nama model
  {
    // PRIMARY KEY tabel user_addresses
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true, // otomatis bertambah
      primaryKey: true,
    },

    // Foreign Key → menghubungkan alamat ke user tertentu
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false, // alamat wajib dimiliki oleh satu user
    },

    // Label alamat (contoh: "Rumah", "Kantor")
    label: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    // Nama penerima paket
    recipient_name: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },

    // Nomor telepon penerima
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },

    // Alamat lengkap (jalan, blok, nomor rumah, RT/RW)
    address_line: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    // Nama kota
    city: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    // Nama provinsi
    province: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    // Kode pos
    postal_code: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },

    // Untuk menandakan apakah alamat ini jadi alamat utama (default)
    is_default: {
      type: DataTypes.BOOLEAN,
      defaultValue: false, // default: bukan alamat utama
    },
  },
  {
    // Nama tabel di database
    tableName: "user_addresses",

    // Tidak menggunakan Sequelize default timestamps (createdAt, updatedAt)
    timestamps: false,
  }
);

// Export model agar bisa digunakan di file controller / service lain
module.exports = UserAddress;
