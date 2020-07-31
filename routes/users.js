const express = require('express')
const router = express.Router()

const userController = require("../controllers/user_controller")

router.get('/profile', userController.profile);
router.get('/bio', userController.bio)
router.get('/history', userController.history)
router.get("/sign-up", userController.signup)
router.get("/sign-in", userController.signin)

module.exports = router;