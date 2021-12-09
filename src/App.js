import { useState } from "react";
import Card from "./components/Card";
import Failure from "./components/Failure";
import Homepage from "./components/Homepage";
import Success  from "./components/Success";

function App() {

   const [home, setHome] = useState(true)
   const [gameCompleted, setGameCompleted] = useState(false)
   const [success, setSuccess] = useState(true)

   const handleHomeClick = () => {
      setHome(false);
   }

   const handleGameCompletion = () => {
      setGameCompleted(true);
   }

  return (
   <div className="App">
      {(gameCompleted)
         ? (success) 
            ? <Success />
            : <Failure />
         : (home)
            ? <Homepage handleHomeClick={handleHomeClick}/>
            : <Card
                  success={success}
                  setSuccess={setSuccess}
                  handleGameCompletion={handleGameCompletion}
               />
      }
   </div>
  );
}

export default App;
