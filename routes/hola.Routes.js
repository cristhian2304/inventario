const express = require("express")
const router = express.Router()
const holaControllers = require("../controllers/holaController")

router.get("/",holaControllers.holaMundo)

module.exports = router;