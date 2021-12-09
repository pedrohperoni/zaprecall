import '../styles/card.css'
import '../styles/cardFooter.css'
import turn from '../assets/turn.png'
import { deck }from '../constants/DeckConstants.js'
import Logo from './Logo'
import { useState } from 'react'

export default function Card({handleGameCompletion, setSuccess, success}){

   const [footerButtons, setFooterButtons] = useState(false)
   const [answerActive, setAnswerActive] = useState(false)
   const [turnAnswer, setTurnAnswer] = useState(true)

   const [border, setBorder] = useState(false)
   const [borderColor, setBorderColor] = useState("")

   const [ currentQuestion, setCurrentQuestion ] = useState(1)

   const handleClickTurnNextCard = () => {
      if(currentQuestion  === (deck.length)){
         handleGameCompletion(true)
      }
      setCurrentQuestion(currentQuestion + 1)
      setFooterButtons(false);
      setAnswerActive(false);
      setTurnAnswer(true);
      setBorder(false)
   }

   const handleClickFooterButtons = () => {
      setFooterButtons(false);
      setTurnAnswer(false);
      setBorder(true);
   }

   const handleClickFooterButtonBlack = () => {
      handleClickFooterButtons();
      setBorderColor("black")
   }

   const handleClickFooterButtonRed = () => {
      handleClickFooterButtons();
      setBorderColor("red")
      setSuccess(false)
   }

   const handleClickFooterButtonYellow = () => {
      handleClickFooterButtons();
      setBorderColor("yellow")
   }

   const handleClickFooterButtonGreen = () => {
      handleClickFooterButtons();
      setBorderColor("green")
   }

   const handleClickTurnAnswer = () => {
      setFooterButtons(true)
      setAnswerActive(true)
   }

   return(
      <>
         <Logo />
         <div className={(border) ? `card ${borderColor}` : "card"} data-identifier="flashcard">
            <span data-identifier="counter">{currentQuestion}/{(deck.length)}</span>

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
                  data-identifier="arrow"
                  />
                  : <img 
                  className="turn" 
                  src={turn} 
                  alt="turn"
                  onClick={handleClickTurnNextCard}
                  data-identifier="arrow"
                  />
            }
         </div>
      </>
    
   )
}