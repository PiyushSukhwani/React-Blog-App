import { useState } from "react";

function App() {

  let [counter, setCounter] = useState(5);

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
  };

  const decreaseValue = () => {
    if(counter === 0) return
    setCounter(counter -= 1)
  }

  return (
    <>
      <h1 style={{ fontSize: "3rem" }}>New Counter</h1>
      <h2 style={{ fontSize: "3rem" }}>counter: {counter}</h2>
      <button style={{ color: "blue", fontSize: "1.2rem" }} onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button style={{ color: "red", fontSize: "1.1rem" }} onClick={decreaseValue}>
        Decrease Value
      </button>
    </>
  );
}

export default App;

