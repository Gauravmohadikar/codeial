const express = require('express')
const router = express.Router()

const socialController = require("../controllers/social_controller")

router.get("/facebook", socialController.facebook)
router.get('/insta', socialController.instagram)
router.get('/twitter', socialController.twitter)

module.exports = router;