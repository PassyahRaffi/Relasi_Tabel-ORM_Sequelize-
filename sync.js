// backend/sync.js
const sequelize = require("./db");
require("./models"); // penting! ini yang load semua relasi

(async () => {
  try {
    console.log("⏳ Syncing database...");
    await sequelize.sync({ force: true });
    console.log("✅ All tables synced with latest relations!");
    process.exit();
  } catch (err) {
    console.error("❌ Sync error:", err);
    process.exit(1);
  }
})();
