import { useState } from "react";
import Card from "./components/Card";
import Failure from "./components/Failure";
import Homepage from "./components/Homepage";
import Success  from "./components/Success";

function App() {

   const [home, setHome] = useState(false)

  return (
   <div className="App">
      {(home)
      ? <Homepage/>
      : <Card />
      }
      {/* <Success /> */}
      {/* <Failure /> */}
   </div>
  );
}

export default App;
