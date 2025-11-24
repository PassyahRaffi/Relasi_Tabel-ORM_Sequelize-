const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    full_name: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },

    nickname: {
      type: DataTypes.STRING(100),
      allowNull: true,   // kalau mau UNIQUE → set unique: true
    },

    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: true,
    },

    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    phone: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },

    profile_image: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    birthday: {
      type: DataTypes.DATEONLY,
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
    tableName: "users",
    timestamps: false, // kamu pakai manual created_at & updated_at
  }
);

module.exports = User;
