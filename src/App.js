import React from "react";
import { CounterExample, TextExample } from "./sample";
import { Master } from "./master";

function App() {
  return (
    <Master>
      <CounterExample />
      <TextExample />
    </Master>
  );
}

export default App;
