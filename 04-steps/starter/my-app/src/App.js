import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="contain">
      <Counter name={"Step"} />
      <Counter name={"Count"} />
      <Time />
    </div>
  );
}

function Counter({ name }) {
  const [counter, setCounter] = useState(1);

  function add() {
    setCounter((counter) => counter + 1);
  }

  function reduce() {
    setCounter((counter) => counter - 1);
  }
  return (
    <div>
      <button onClick={reduce}>-</button>
      <h>
        {name} ：{counter}
      </h>
      <button onClick={add}>+</button>
    </div>
  );
}

function Time() {
  const currentDate = new Date();
  const futureDate = new Date(currentDate.setDate(currentDate.getDate() + 30));
  return <h2>30 days from today is {futureDate.toDateString()}</h2>;
}
