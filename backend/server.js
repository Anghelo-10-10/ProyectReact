let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
const bodyParser = require('body-parser');
const serverRoutes = require('./routes/serverRoutes');
let app = express();
let port = 3000;
const reciclablesRoutes = require("./routes/reciclables");



async function connectDB(){
    try{
        await mongoose.connect('mongodb://localhost:27017/reciclaje',{useNewUrlParser:true,useUnifiedTopology: true});
    }
    catch(err){
        console.error("Error en la conexión a Base de Datos", err);
        process.exit(1);
    }
    
}

connectDB();

app.use(cors());
app.use(express.json());
app.use('/reciclaje', serverRoutes);
app.use("/api/reciclables", reciclablesRoutes);
app.use("/api/reciclables", require("./routes/reciclables"));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('http://localhost:3000/mapa.html')); // Servir archivos estáticos del cliente


app.listen(port, ()=>{
    console.log("The server is running at http://localhost:3001/reciclaje");
})




