import logo from "../assets/logo-mini.png";

export default function Logo() {
  const reload = () => {
    window.location.reload(false);
  };

  return (
    <div onClick={reload} className="logo">
      <img src={logo} alt="ZapRecall" />
    </div>
  );
}
