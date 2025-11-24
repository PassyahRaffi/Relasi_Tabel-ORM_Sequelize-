const User = require("../models/User");

class UserService {

  async getAll() {
    return await User.findAll();
  }

  async getById(id) {
    return await User.findByPk(id);
  }

  async create(data) {
    return await User.create(data);
  }

  async update(id, data) {
    const user = await User.findByPk(id);
    if (!user) return null;
    return await user.update(data);
  }

  async delete(id) {
    const user = await User.findByPk(id);
    if (!user) return null;
    await user.destroy();
    return true;
  }
}

module.exports = new UserService();
