// backend/routes/cart.routes.js
const express = require("express");
const router = express.Router();

// GET /api/cart
router.get("/", (req, res) => {
  res.json({
    message: "GET user cart (route working)",
  });
});

module.exports = router;
