const express= require("express")
const holaRoutes = require("./routes/hola.Routes")


const app = express()

const PORT = 3006
app.set("port", PORT)

app.use("/api/hola",holaRoutes)

app.get("/", (req,res)=>{
 res.send("hola mundo")
})

app.listen(PORT,()=>{
  console.log(`server runing in port ${PORT}`)
})




