//import des outils
const express = require("express");
const cors = require("cors");
//configure lance les outils
const app = express();
const PORT = 3000;

//middleware
app.use(express.json());
app.use(cors());

//importer les routes
const questionRouter = require("./routes/question.route");

//activation des routes
app.use("/", questionRouter);

//la logique qui gere les erreurs 404
app.use((req, res) => {
    res.status(404).json({
        message: "page non existante",
        path: req.originalUrl
    });
});

//lance notre server node
app.listen(PORT, ()=> {
    console.log("server bien lancé ! sur le port" + PORT)
});

