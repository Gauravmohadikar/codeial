const express = require("express")

const router = express.Router()

const homeController = require("../controllers/home_controller")
console.log("Routers loaded")

router.get("/", homeController.home)
router.get("/play", homeController.play)
router.get("/savage", homeController.savage)

router.use("/users", require("./users"))
router.use("/social", require("./social"))

module.exports = router ;