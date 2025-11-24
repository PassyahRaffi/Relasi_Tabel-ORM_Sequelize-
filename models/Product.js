const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    brand_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    price: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },

    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },

    rating: {
      type: DataTypes.DECIMAL(2, 1),
      allowNull: true,
    },

    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },

    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "products",
    timestamps: false,
  }
);

module.exports = Product;
