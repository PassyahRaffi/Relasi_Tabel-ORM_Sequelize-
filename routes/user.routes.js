// backend/routes/user.routes.js
const express = require("express");
const router = express.Router();

// GET /api/users
router.get("/", (req, res) => {
  res.json({
    message: "GET all users (route working)",
  });
});

module.exports = router;
