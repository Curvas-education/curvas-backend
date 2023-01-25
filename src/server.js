const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

require("./database")


// Configuração 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

// Importação das rotas
const userRoutes = require("./routes/UserRoutes");

// Rotas
app.use("/user", userRoutes);

app.listen(PORT, ()=>{
    console.log("Rodando http://localhost:8080")
})