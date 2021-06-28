const express = require(`express`); 

//genera una aplicacion express
const app = express();

//Routes (Rutas)
const { RouterIndex }  = require(`./routes/index`);
app.use("/", RouterIndex);
app.listen(3000, () =>{
    console.log("servidor escuchando en http://localhost:3000");
})