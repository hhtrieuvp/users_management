import React, { useState } from "react";
import { MyButton } from "./Button";
import logo from "./logo.svg"
export const Counter = () => {
    const [counter, setCounter] = useState(0);
    const handleIncrement = () => {
      // Counter state is incremented
      console.log("+")
      setCounter(counter + 1);
    };
    const handleDecrement = () => {
      // Counter state is decremented
      setCounter(counter - 1);
    };
    const resetCounter = () => {
      setCounter(0)
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React counter</h2>
          <p>{counter}</p>
          <div>
              <MyButton text={'-'} handleClick={handleDecrement}/>
              <MyButton text={'+'} handleClick={handleIncrement}/>
          </div>
          <MyButton text={'Reset'} handleClick={resetCounter}/>
        </header>
      </div>
    );
}