// backend/models/Category.js

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
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "categories",   // ⚠ wajib: sama persis dengan nama tabel di Postgres
    timestamps: false,
  }
);

module.exports = Category;
