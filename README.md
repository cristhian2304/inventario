1. git add .
2. git commit -m"creando la ruta y el controlador de hola"
3. git push



# poryecto inventario
### incio del proyecto
abre la termianl en la carpeta en la carpeta donde vas a aguardar el proyecto, y pon los siguientes comandos:

mkdir proyecto-inventario
cd proyecto- inventario

not init

touch .env .gitignore index.js 

instalamos las dependencias, recuerden npm es el manejador de paquetes de node o node package manege

npm install express mongoose dotenv cors

npm install --save-dev nodemon

y en el .gitignore copiar
node_modules
.env

y ahora vamos a subir el codigo a github

git add .
git commit -m"instalaciones inciales del proyecto"
git push


### HOLA MUNDO EN JODE.JS
ahora vamos a hacer un hola mundo en node.js, para eso vamos a poner el siguiente condigo en index.js

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

vamos a explicar cada una de las lineas
- const express= require("express") = vamos a usar el paquete express con el nombre express, estamos trayendo la herramienta que vamos a usar
- const app = express() = definimos el nombre de la herramienta que vamos a utilizar
- const PORT = 3006 = definimos el numero de puerto
- app.set("por", PORT) = configuro el puerto del app
- app.get("/", = tenemos un verbo de http y una ruta y definimos una funcion que se ejecute
  (req,res)=>{ = req (la infromacion que recivo del cliente)
               = res (la respuesta que le doy al cliente)
  res.send("hola mundo") = enviando la respuesta "hola mundo"
  }) = estoy cerrando lo de arriba 
- app.listen(PORT,()=>{ = que me escuche el puerto
  console.log(`server runing in port ${PORT}`) = me envio este mensaje para saber que todo esta ok 
  }) = estoy cerrando lo de arriba

### rutas y controladores
primero creamos las carpetas con

- mkdr controllers models routes

const holaRoutes = require("./routes/hola.Routes")
app.use("/api/hola",holaRoutes)

exports.holaMundo = (req,res)=>{
  console.log("hola desde el controlador")
  res.send("hola desde el controlador")
}

const express = require("express")
const router = express.Router()
const holaControllers = require("../controllers/holaController")

router.get("/",holaControllers.holaMundo)

module.exports = router;

preguntarle a gloria si hay error

### vamos a trabjar en el README de lo que vimos hoy
creamos cuenta en mongo y la enlasamos con contraseña popis
y nombre user

creamos tambien carpeta inventario en controllers y hacemos el llamado
const leerinventario = (req, res) => {
  console.log("hola desde el controlador de inventario")
  res.send("hola desde el controlador de inventario")
}

module.exports = { leerinventario }

creamos tambien la carpeta inventarios en routes y hacemos el llamado
const express = require("express")
const {leerinventario} = require("../controllers/inventario")
const router = express.Router()

router.get("/", leerinventario)

module.exports = router

en index hicimos las siguientes dos enlaces
const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URI)
.then(console.log("connect to BD"))
.catch(err=> console.error(err))

relizar pruevas en postman
tambien en git hasb




