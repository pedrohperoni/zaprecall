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

   const [ currentQuestion, setCurrentQuestion ] = useState(1)

   const handleClickTurnNextCard = () => {
      setCurrentQuestion(currentQuestion + 1)
      setFooterButtons(false);
      setAnswerActive(false);
      setTurnAnswer(true);
      console.log("Ir para a proxima pergunta add +1")
   }

   const handleClickFooterButton = () => {
      setFooterButtons(false);
      setTurnAnswer(false);
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
         <div className="card">
            <span>{currentQuestion}/{(deck.length)}</span>

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