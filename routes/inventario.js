const express = require("express")
const {leerinventario} = require("../controllers/inventario")
const router = express.Router()

router.get("/", leerinventario)

module.exports = router