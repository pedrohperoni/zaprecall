import '../styles/card.css'
import turn from '../assets/turn.png'
import { deck }from '../constants/DeckConstants.js'
import { CardFooter } from './CardFooter'

export default function Card(){

   return(
      <div className="card">

         <h2>{deck[0].question}</h2>
         <span>{deck[0].id}/{(deck.length)}</span>
         {/* <h1>{deck[0].question}</h1> */}
         <p>{deck[0].answer}</p>
         {/* <img className="turn" src={turn} alt="turn"/> */}
         <CardFooter />
      </div>
   )
}