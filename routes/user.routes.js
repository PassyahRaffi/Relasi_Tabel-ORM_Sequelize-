const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const ProductController = require("../controllers/product.controller");

// CRUD users
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

// CRUD products
router.get("/", ProductController.getAllProducts);
router.get("/:id", ProductController.getProductById);
router.post("/", ProductController.createProduct);
router.put("/:id", ProductController.updateProduct);
router.delete("/:id", ProductController.deleteProduct);

module.exports = router;
