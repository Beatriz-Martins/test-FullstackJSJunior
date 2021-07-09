const express = require('express');
const router = express.Router();
let controller = require("../controllers/users");

// All routes
router.get("/api/v1/users", controller.listAllUsers);
router.get("/api/v1/users/:user_id", controller.listOneUser);
router.post("/api/v1/users", controller.addUser);
router.put("/api/v1/users/:user_id", controller.updateUser);
router.delete("/api/v1/users", controller.deleteAllUsers);
router.delete("/api/v1/users/:user_id", controller.deleteOneUser);

module.exports = router;