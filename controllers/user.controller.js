const UserService = require("../services/user.service");

exports.getAllUsers = async (req, res) => {
  const users = await UserService.getAll();
  res.json({ status: "success", data: users });
};

exports.getUserById = async (req, res) => {
  const user = await UserService.getById(req.params.id);
  if (!user)
    return res.status(404).json({ status: "error", message: "User not found" });
  res.json({ status: "success", data: user });
};

exports.createUser = async (req, res) => {
  try {
    const newUser = await UserService.create(req.body);
    res.status(201).json({ status: "success", data: newUser });
  } catch (err) {
    res.status(400).json({ status: "error", message: err.message });
  }
};

exports.updateUser = async (req, res) => {
  const updated = await UserService.update(req.params.id, req.body);
  if (!updated)
    return res.status(404).json({ status: "error", message: "User not found" });

  res.json({ status: "success", data: updated });
};

exports.deleteUser = async (req, res) => {
  const deleted = await UserService.delete(req.params.id);
  if (!deleted)
    return res.status(404).json({ status: "error", message: "User not found" });

  res.json({ status: "success", message: "User deleted" });
};
