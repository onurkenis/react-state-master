import React from "react";
import { useMaster } from "./master";
import { Input } from "antd";
import { ActionListener } from "./actionListener";
import { Reducer } from "./reducer";
import { Row } from "antd";

export const CounterExample = () => {
  const { state, dispatch } = useMaster();
  return (
    <Row>
      <p>Count: {state.count}</p>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        +
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <ActionListener
        action="increment"
        effect={() => {
          console.log("increment action is triggered");
        }}
      />
      <Reducer
        name="count"
        action="increment"
        handler={count => {
          return count + 1;
        }}
      />
      <Reducer
        name="count"
        action="decrement"
        handler={count => {
          return count - 1;
        }}
      />
    </Row>
  );
};

export const TextExample = () => {
  const { state, dispatch } = useMaster();
  return (
    <Row style={{ marginTop: "3em" }}>
      <p>Text: {state.text}</p>
      <Input
        placeholder="Basic usage"
        onChange={e => {
          dispatch({ type: "text/change", payload: e.target.value });
        }}
      />

      <Reducer
        name="text"
        action="text/change"
        handler={(state, payload) => payload}
      />

      <ActionListener
        action="text/change"
        effect={() => {
          console.log("text change is triggered");
        }}
      />
    </Row>
  );
};