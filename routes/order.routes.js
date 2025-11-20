// backend/routes/order.routes.js
const express = require("express");
const router = express.Router();

// GET /api/orders
router.get("/", (req, res) => {
  res.json({
    message: "GET all orders (route working)",
  });
});

module.exports = router;
