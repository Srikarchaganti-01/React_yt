import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 5;
  const addValue = () => {
    // counter = counter + 1;
    if (counter < 20) {
      setCounter(counter + 1);
      console.log("value Added");
    } else {
      console.log("Counter value cannot be more than 20");
    }
  };
  const remvoveValue = () => {
    // counter = counter - 1;
    if (counter > 0) {
      setCounter(counter - 1);
      console.log("value Removed");
    } else {
      console.log("Counter value cannot be less than 0");
    }
  };
  return (
    <>
      <h1>Srikar Counter Project</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={remvoveValue}>Remove Value</button>
    </>
  );
}

export default App;
