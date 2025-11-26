// Import tipe data dari Sequelize (STRING, INTEGER, DATE, dll)
const { DataTypes } = require("sequelize");

// Import instance koneksi database yang sudah dibuat di ../db
const sequelize = require("../db");

// sequelize.define() TIDAK mengembalikan data dari database.
// Yang dikembalikan adalah *Model Class* (blueprint) bernama "User".
// Blueprint inilah yang nanti dipakai untuk CRUD: User.findAll(), User.create(), dll.
const User = sequelize.define(
  "User", // Nama model (dipakai oleh Sequelize secara internal)
  {
    // Kolom ID
    id: {
      type: DataTypes.INTEGER,   // tipe integer
      autoIncrement: true,       // otomatis naik tiap ada user baru
      primaryKey: true,          // sebagai primary key
    },

    // Kolom nama lengkap
    full_name: {
      type: DataTypes.STRING(150),
      allowNull: true,           // boleh null
    },

    // Kolom nama panggilan
    nickname: {
      type: DataTypes.STRING(100),
      allowNull: false, // wajib diisi
      unique: true,  // tidak boleh duplikat antara user
    },

    // Kolom email
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,          // wajib diisi
      unique: true,              // tidak boleh duplikat antara user
    },

    // Kolom password (bcrypt biasa panjangnya 60+ karakter)
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    // Kolom nomor telepon
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },

    // Kolom foto profil (biasanya berupa URL → type TEXT)
    profile_image: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    // Kolom tanggal lahir (hanya tanggal tanpa jam)
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },

    // Timestamp dibuat manual (karena timestamps: false)
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, // otomatis isi waktu sekarang
    },

    // Timestamp update manual
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    // Nama tabel nyata di database (tanpa S tambahan dari Sequelize)
    tableName: "users",

    // timestamps: false artinya Sequelize TIDAK membuat kolom createdAt & updatedAt otomatis
    // karena kamu sudah membuat versi manual: created_at & updated_at
    timestamps: false,
  }
);

// Export "User" sebagai Model Class untuk digunakan di file lain
module.exports = User;
