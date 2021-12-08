import Card from "./components/Card";
import { Failure } from "./components/Failure";
import Homepage from "./components/Homepage";
import Logo from "./components/Logo";
import { Success } from "./components/Success";

function App() {
  return (
   <div className="App">
      {/* <Homepage /> */}
       <Logo />
      {/* <Card /> */}
      {/* <Success /> */}
      <Failure />
   </div>
  );
}

export default App;
