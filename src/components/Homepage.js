import logo from "../assets/logo.png";
import next from "../assets/next.png";
import "../styles/homepage.css";

export default function Homepage({ handleHomeClick }) {
  return (
    <div className="homepage">
      <img src={logo} alt="ZapRecall" />
      <button
        onClick={handleHomeClick}
        className="homeButton"
        data-identifier="start-zap-recall"
      >
        <span>Praticar React</span>
        <img src={next} alt="next" />
      </button>
    </div>
  );
}
