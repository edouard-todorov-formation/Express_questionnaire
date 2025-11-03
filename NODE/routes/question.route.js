//import des outils
const express = require("express");
const router = express.Router();

//variable contenant la bonne réponse a la premiere question
const correctAnswer = "npm";
//variable contenant la bonne réponse a la deuxieme question
const correctAnswer2 = "il est mignon mais c'est un tout ptit breton";

//route get "/check" pour valider la réponse
router.get("/check", (req, res) => {
    console.log(req);
    const userAnswer = req.query.answer;
    res.json({ correct: userAnswer === correctAnswer });
});

//route get "/check2" pour valider la 2eme réponse
router.get("/check2", (req, res) => {
    console.log(req);
    const userAnswer = req.query.answer;
    res.json({ correct: userAnswer === correctAnswer2 });
});

module.exports = router;