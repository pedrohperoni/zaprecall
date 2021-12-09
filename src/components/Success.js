import party from '../assets/party.png'
import '../styles/results.css'
import Logo from './Logo'
import next from '../assets/next.png'

export default function Success(){

   const reload = () => {
      window.location.reload(false)
   }

   return(
      <div className="results">
         <Logo />
         <div className="resultsTitle">
            <h1>PARABÉNS!</h1>
            <img src={party} alt="party" />
         </div>
         <h3>Você não esqueceu de nenhum flashcard!</h3>
         <button onClick={reload} className="tryAgainButton">
            <span>Tentar Novamente</span>
            <img src={next} alt="next" />
         </button>
      </div>
   )
}