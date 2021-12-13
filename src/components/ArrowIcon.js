import turn from "../assets/turn.png";

export function ArrowIcon({ handleClick }) {
  return (
    <img
      className="turn"
      src={turn}
      alt="turn"
      onClick={handleClick}
      data-identifier="arrow"
    />
  );
}
