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
const questionRoutes = require("./routes/QuestionsRoutes");

// Rotas
app.use("/user", userRoutes);
app.use("/question", questionRoutes);

app.listen(PORT, ()=>{
    console.log("Rodando http://localhost:8080")
})