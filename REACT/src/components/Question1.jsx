import { useState } from 'react'
import './QuestionBorder.css'

function Question1() {
  const [responseData, setResponseData] = useState("") // variable qui stock la reponse du serveur
  const [questionNbr, setQuestionNbr] = useState(1) // variable qui stock le numero de la question a afficher
  const [inputValue, setInputValue] = useState("") // variable qui stock la valeur de l'input de la deuxieme question

  //fonction qui envoie la premiere réponse au clic
  const handleCheck = async (toto) => {
    const res = await fetch("http://localhost:3000/check?answer=" + toto) // "?" début de paramètre de la requete
    const data = await res.json()
    if (data.correct) {
      setQuestionNbr(2)
      setResponseData("")
    } else {
      setResponseData("Mauvaise réponse")
    }
  }

  //fonction qui envoie la deuxieme réponse au clic
  const handleCheckInput = async () => {
    const res = await fetch('http://localhost:3000/check2?answer=' + inputValue)
    const data = await res.json()
    if (data.correct) {
      setQuestionNbr(3)
      setResponseData("")
      fetch('http://localhost:3000/bravo')
    } else {
      setResponseData("Mauvaise réponse")
    }
    }

  return (
    <div className="border">

      {/* affichage de la premiere question */}   
      {questionNbr === 1 && (
        <div>
          <h2>Question 1</h2>
          <p>Comment s'appelle le gestionnaire de package de react ?</p>
          <button onClick={() => handleCheck("npm")}>npm</button>
          <button onClick={() => handleCheck("composer")}>composer</button>
          <button onClick={() => handleCheck("node")}>node</button>
        </div>
      )}

      {/* affichage de la deuxieme question */}
      {questionNbr === 2 && (
        <div>
          <h2>Question 2</h2>
          <p>Est ce que Yusuf est le plus beau des Turcs ?</p>
          <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <button onClick={handleCheckInput}>Valider</button>
        </div>
      )}

      {responseData && <p>{responseData}</p>}

      {/* affichage de fin de jeu */}
      {questionNbr === 3 && (
        <div>
          <h2>BRAVO</h2>
        </div>
      )}
    </div>
    
  )
}

export default Question1

