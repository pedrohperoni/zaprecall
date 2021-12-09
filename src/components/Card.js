import '../styles/card.css'
import '../styles/cardFooter.css'
import turn from '../assets/turn.png'
import { deck }from '../constants/DeckConstants.js'
import Logo from './Logo'
import { useState } from 'react'

export default function Card({handleFailure, handleSuccess, handleGameCompletion, setSuccess, success}){

   const [footerButtons, setFooterButtons] = useState(false)
   const [answerActive, setAnswerActive] = useState(false)
   const [turnAnswer, setTurnAnswer] = useState(true)

   const [border, setBorder] = useState(false)
   const [borderColor, setBorderColor] = useState("")

   const [ currentQuestion, setCurrentQuestion ] = useState(1)

   const handleClickTurnNextCard = () => {
      if(currentQuestion + 1  === (deck.length)){
         handleGameCompletion(true)
         console.log(handleGameCompletion, "teste")
      }
      console.log(currentQuestion +1 , deck.length)
      setCurrentQuestion(currentQuestion + 1)
      setFooterButtons(false);
      setAnswerActive(false);
      setTurnAnswer(true);
      setBorder(false)
      console.log("Ir para a proxima pergunta add +1")

   }

   const handleClickFooterButtonBlack = () => {
      setFooterButtons(false);
      setTurnAnswer(false);
      setBorder(true);
      setBorderColor("black")
      console.log("Remover botoes de resposta, aparecer borda e aparecer botao prox pergunta")

   }

   const handleClickFooterButtonRed = () => {
      setFooterButtons(false);
      setTurnAnswer(false);
      setBorder(true);
      setBorderColor("red")
      setSuccess(false)
      console.log("Remover botoes de resposta, aparecer borda e aparecer botao prox pergunta")

   }

   const handleClickFooterButtonYellow = () => {
      setFooterButtons(false);
      setTurnAnswer(false);
      setBorder(true);
      setBorderColor("yellow")
      console.log("Remover botoes de resposta, aparecer borda e aparecer botao prox pergunta")

   }

   const handleClickFooterButtonGreen = () => {
      setFooterButtons(false);
      setTurnAnswer(false);
      setBorder(true);
      setBorderColor("green")
      console.log("Remover botoes de resposta, aparecer borda e aparecer botao prox pergunta")

   }

   const handleClickTurnAnswer = () => {
      setFooterButtons(true)
      setAnswerActive(true)
      console.log("Aparecer resposta e botoes de reposta")
   }

   return(
      <>
         <Logo />
         <div className={(border) ? `card ${borderColor}` : "card"}>
            <span>{currentQuestion}/{(deck.length)}</span>

            <h2>
               {(answerActive)
                  ? deck[currentQuestion-1].question
                  : ""
               }
            </h2>

            
            {(answerActive)
               ? <p>{deck[currentQuestion-1].answer}</p>               
               :<h1>{deck[currentQuestion-1].question}</h1>
            }

            {(footerButtons)
               ?  <div className="cardFooter">
                     <button className="cardButton black" onClick={handleClickFooterButtonBlack}>Aprendi Agora</button>
                     <button className="cardButton red" onClick={handleClickFooterButtonRed}>Não lembrei</button>
                     <button className="cardButton green" onClick={handleClickFooterButtonGreen}>Lembrei com esforço</button>
                     <button className="cardButton yellow" onClick={handleClickFooterButtonYellow}>Zap!</button>
                  </div>
               : (turnAnswer) 
                  ? <img 
                  className="turn" 
                  src={turn} 
                  alt="turn"
                  onClick={handleClickTurnAnswer}
                  />
                  : <img 
                  className="turn" 
                  src={turn} 
                  alt="turn"
                  onClick={handleClickTurnNextCard}
                  />
            }
         </div>
      </>
    
   )
}