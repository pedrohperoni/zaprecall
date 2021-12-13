import sad from "../assets/sad.png";
import "../styles/results.css";
import Logo from "./Logo";
import next from "../assets/next.png";

export default function Failure() {
  const reload = () => {
    window.location.reload(false);
  };

  return (
    <div className="results">
      <Logo />
      <div className="resultsTitle">
        <h1>Putz...</h1>
        <img src={sad} alt="sad" />
      </div>
      <h3>Você esqueceu alguns flashcards...</h3>
      <h3>Não desanime! Na próxima você consegue!</h3>
      <button onClick={reload} className="tryAgainButton">
        <span>Tentar Novamente</span>
        <img src={next} alt="next" />
      </button>
    </div>
  );
}
