// backend/server.js
require("dotenv").config();
const app = require("./app");
const sequelize = require("./db");

const PORT = process.env.PORT || 8000;

async function startServer() {
  try {
    // Test connection ke DB
    await sequelize.authenticate();
    console.log("✅ Database connected successfully!");

    // Jalankan server
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
