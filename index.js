const express= require("express")

const app = express()

const PORT = 3006

app.set("por", PORT)

app.get("/", (req,res)=>{
 res.send("hola mundo")
})

app.listen(PORT,()=>{
  console.log(`server runing in port ${PORT}`)
})



