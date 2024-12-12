const express= require("express")
const mongoose = require("mongoose")
require("dotenv").config()

const holaRoutes = require("./routes/hola.Routes")
const inventarioRoutes = require("./routes/inventario")
const app = express()
const PORT = 3006
app.set("port", PORT)

app.use("/api/hola",holaRoutes)
app.use("/api/inventario",inventarioRoutes)
//app.use("/api/---/",herramientasRoutes)
//app.use("/api/---",empleadosRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(console.log("connect to BD"))
.catch(err=> console.error(err))


app.get("/", (req,res)=>{
 res.send("hola mundo")
})

app.listen(PORT,()=>{
  console.log(`server runing in port ${PORT}`)
})




