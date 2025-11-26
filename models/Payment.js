// Import tipe data dari Sequelize (STRING, INTEGER, BIGINT, DATE, dll)
const { DataTypes } = require("sequelize");

// Import instance koneksi database dari ../db
const sequelize = require("../db");

// sequelize.define() akan membuat *Model Class* bernama "Payment".
// Model ini adalah blueprint tabel "payments", digunakan untuk CRUD seperti:
// Payment.findAll(), Payment.create(), Payment.update(), dll.
// Yang dikembalikan adalah struktur model, bukan data dari database.
const Payment = sequelize.define(
  "Payment", // Nama model internal
  {
    // PRIMARY KEY pembayaran
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true, // otomatis bertambah
      primaryKey: true,
    },

    // Foreign Key ke tabel orders
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false, // pembayaran harus terkait order tertentu
    },

    // Nama provider pembayaran (contoh: Midtrans, Xendit, Stripe, COD)
    provider: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },

    // Status pembayaran (pending, paid, failed, refunded, expired)
    status: {
      type: DataTypes.ENUM(
        "PENDING",   // menunggu pembayaran
        "PAID",      // pembayaran berhasil
        "FAILED",    // gagal diproses provider
        "EXPIRED",   // waktu pembayaran habis / timeout
        "REFUNDED"   // dana dikembalikan
      ),
      allowNull: false,
      defaultValue: "PENDING", // default saat order baru dibuat
    },

    // ID transaksi dari provider pembayaran
    transaction_id: {
      type: DataTypes.STRING(100),
      allowNull: true, // bisa kosong jika pembayaran masih pending
    },

    // Total jumlah yang dibayar
    amount: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },

    // Waktu pembayaran berhasil dilakukan
    paid_at: {
      type: DataTypes.DATE,
      allowNull: true, // hanya terisi kalau status = "paid"
    },
  },
  {
    // Nama tabel di database
    tableName: "payments",

    // Tidak menggunakan createdAt & updatedAt default Sequelize
    timestamps: false,
  }
);

// Export model untuk digunakan di controller/service
module.exports = Payment;
