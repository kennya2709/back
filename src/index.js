const express = require('express');
const app = express();
const mongoose = require('mongoose');
const productosRoutes = require('./routes/productos.route');
const port = 5000;
const URI = "mongodb+srv://kennya-orona:cncowner1@cluster0.yywvdvd.mongodb.net/API?retryWrites=true&w=majority"

app.get('/', (req, res) => {
    res.send("si jala :v")
})

app.use(express.json())

mongoose.set("strictQuery", false)

mongoose.connect(URI)
    .then(console.log('Base de Datos Conectada :D'))
    .catch((Error) => console.log(Error))
    

app.use("/productos", productosRoutes)

app.listen(port, () => {
    console.log('listening on port', port);
}) 