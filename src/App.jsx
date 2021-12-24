import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(count * 2);
  };
  const addOne1 = (value) => {
    if (value === 2) {
      setCount(count * 2);
    }
    setCount(count + value);
  };
  // const subOne = () => {
  //   setCount(count - 1);
  // };
  return (
    <div className="App">
      <div>
        <h2>Counter: {count}</h2>
      </div>
      {/* <button disabled={count > 10 ? 10 : null} onClick={addOne}>
        Add1
      </button>
      <button disabled={count <= 0 ? 10 : null} onClick={subOne}>
        Sub1
      </button> */}
      <button onClick={() => addOne1(1)}>Add2</button>
      <button onClick={() => addOne1(-1)}>Sub2</button>
      <button onClick={() => addOne()}>DoubleIt</button>
      {/* <div>Counter id {count % 2 !== 1?"EVEN":"ODD"}</div>
      {
        count % 2 !== 1?<h1>ITS EVEN</h1>:<h1>ITS ODD</h1>
      } */}
    </div>
  );
}
