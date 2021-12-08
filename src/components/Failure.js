import sad from '../assets/sad.png'
import '../styles/results.css'
import Logo from './Logo'

export function Failure(){
   return(
      <div className="results">
      <Logo />
         <div className="resultsTitle">
            <h1>Putz...</h1>
            <img src={sad} alt="sad" />
         </div>
         <h3>Você esqueceu alguns flashcards...</h3>
         <h3>Não desanime! Na próxima você consegue!</h3>
      </div>
   )
}