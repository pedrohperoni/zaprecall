import '../styles/cardFooter.css'
export function CardFooter(){
   return(
   <div className="cardFooter">
      <button className="cardButton black">Aprendi Agora</button>
      <button className="cardButton red">Não lembrei</button>
      <button className="cardButton green">Lembrei com esforço</button>
      <button className="cardButton yellow">Zap!</button>
   </div>
   )
}