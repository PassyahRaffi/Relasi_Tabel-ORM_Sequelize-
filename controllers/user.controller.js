// backend/controllers/user.controller.js

exports.getAllUsers = async (req, res) => {
  res.json({
    status: "success",
    message: "GET all users (controller working)",
  });
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  res.json({
    status: "success",
    message: `GET user by id: ${id} (controller working)`,
  });
};
