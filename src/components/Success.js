import party from '../assets/party.png'
import '../styles/results.css'
import Logo from './Logo'

export default function Success(){
   return(
      <div className="results">
         <Logo />
         <div className="resultsTitle">
            <h1>PARABÉNS!</h1>
            <img src={party} alt="party" />
         </div>
         <h3>Você não esqueceu de nenhum flashcard!</h3>
      </div>
   )
}