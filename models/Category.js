const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Category = sequelize.define(
  "Category",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    slug: {
      type: DataTypes.STRING(120),
      allowNull: true,
    },
  },
  {
    tableName: "categories",
    timestamps: false,
  }
);

module.exports = Category;
