import '../styles/card.css'
import '../styles/cardFooter.css'
import turn from '../assets/turn.png'
import { deck }from '../constants/DeckConstants.js'
import Logo from './Logo'
import { useState } from 'react'

export default function Card(){

   const [footerButtons, setFooterButtons] = useState(false)
   const [answerActive, setAnswerActive] = useState(false)
   const [turnAnswer, setTurnAnswer] = useState(true)

   const handleClickTurnNextCard = () => {
      setFooterButtons(false);
      setAnswerActive(false);
      setTurnAnswer(true);
      console.log("seta inicio")
   }

   const handleClickFooterButton = () => {
      setFooterButtons(false);
      setTurnAnswer(false);
      console.log("tirar botao aparecer texto")
   }

   const handleClickTurnAnswer = () => {
      setFooterButtons(true)
      setAnswerActive(true)
      console.log("aparecer resposta")
   }


   return(
      <>
         <Logo />
         <div className="card">
            <span>{deck[0].id}/{(deck.length)}</span>

            <h2>
               {(answerActive)
                  ? deck[0].question
                  : ""
               }
            </h2>

            
            {(answerActive)
               ? <p>{deck[0].answer}</p>               
               :<h1>{deck[0].question}</h1>
            }

            {(footerButtons)
               ?  <div className="cardFooter">
                     <button className="cardButton black" onClick={handleClickFooterButton}>Aprendi Agora</button>
                     <button className="cardButton red" onClick={handleClickFooterButton}>Não lembrei</button>
                     <button className="cardButton green" onClick={handleClickFooterButton}>Lembrei com esforço</button>
                     <button className="cardButton yellow" onClick={handleClickFooterButton}>Zap!</button>
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