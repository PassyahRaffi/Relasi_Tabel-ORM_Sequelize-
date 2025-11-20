// backend/controllers/order.controller.js

exports.getAllOrders = async (req, res) => {
  res.json({
    status: "success",
    message: "GET all orders (controller working)",
  });
};

exports.getOrderById = async (req, res) => {
  const { id } = req.params;
  res.json({
    status: "success",
    message: `GET order by id: ${id} (controller working)`,
  });
};
