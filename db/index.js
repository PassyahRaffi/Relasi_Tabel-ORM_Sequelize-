// backend/db/index.js
const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    logging: false, // set true kalau mau lihat log query SQL
  }
);

// Test connection function (optional but useful)
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("✅ PostgreSQL connected successfully!");
  } catch (error) {
    console.error("❌ Unable to connect to DB:", error);
  }
}

testConnection();

module.exports = sequelize;
