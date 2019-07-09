import React from 'react';
import { useMaster, Master } from './master';
import { ActionListener } from './actionListener';

const CounterExample = () => {
  const { state, dispatch } = useMaster();
  return (
    <>
      Count: {state.count} <br />
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      > 
        +
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
};

function App() {
  return (
    <Master>
    <ActionListener
      action="increment"
      effect={() => {
        console.log("increment action is triggered");
      }}
    />
    <CounterExample />
  </Master>
  );
}

export default App;
