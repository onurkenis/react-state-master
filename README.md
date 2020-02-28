# react-state-master

A playground to manage the state in  `<Master/>`, by playing with react hooks & context api. 

[![Edit hooks-playground](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/hooks-playground-eoi1c?fontsize=14)

## Usage
```jsx
import React from "react";
import { useMaster, Master } from "./master";
import { ActionListener } from "./actionListener";
import { Reducer } from "./reducer";

function CounterExample() {
  const { state, dispatch } = useMaster();
  return (
    <div>
      <div>{state.count}</div>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <Reducer
        name="count"
        action="increment"
        handler={count => {
          return count + 1;
        }}
      />
      <ActionListener
        action="increment"
        effect={() => {
          console.log("increment action is triggered");
        }}
      />
    </div>
  );
}

function App() {
  return (
    <Master>
      <CounterExample />
    </Master>
  );
}

```
You can easily modify and access state inside of Master and any action can be listened by  `<ActionListener/>` to run an effect

## Running the application

1. Install dependencies

```sh
cd react-state-master
npm install
```

2. Run the app in the development mode

```sh
npm start
```

## Contributing

Commit messages must comply with [conventional commits](https://www.conventionalcommits.org).
