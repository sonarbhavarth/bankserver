const express = require('express');
const authMiddleware = require("../middleware/auth.middleware")
const accountController = require("../controllers/account.controller")





/**
 * - post /api/account
 * - create new account
 * - proteacted route
 */



const router = express.Router();
router.post("/",authMiddleware.authMiddleware, accountController.createAccountController)
module.exports = router