import React from "react";

function Counter() {
  // This code snippet defines three functions that manipulate a counter using React hooks.
  // Define the counter state variable and its setter function using React's useState hook.
  const [counter, setCounter] = React.useState(0);

  // Define the onIncrement function that increments the counter by 1.
  function onIncrement() {
    setCounter(counter + 1);
  }

  // Define the onDecrement function that decrements the counter by 1, but only if it is greater than 0.
  function onDecrement() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  // Define the onReset function that resets the counter to 0.
  function onReset() {
    setCounter(0);
  }

  return (
    <>
      <div className="app">
        <h1 className="Heading">Counter App</h1>

        <div className="container">
          <div className="total-amount-circle">
            <div className="card-text">{counter}</div>
          </div>

          <div className="buttons">
            <button className="btn_one" onClick={onIncrement}>
              +
            </button>

            <button className="btn_two" onClick={onDecrement}>
              -
            </button>

            <button className="btn_three" onClick={onReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
