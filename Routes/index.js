const express = require("express");
const router = new express.Router();
const userController = require("../Controllers/userController");

//modify in the future, temporary routes

router.get("/list", userController.getAccounts);
router.post('/add', userController.createAccount);
router.patch('/account/:id', userController.updateAccount);
router.delete('/account/:id', userController.deleteAccount);

module.exports = router;