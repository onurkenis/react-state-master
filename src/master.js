import React, { useReducer, useContext } from "react";
import { emitter } from "./actionListener";
import { reducer } from "./constants";

const MasterContext = React.createContext({
  state: {},
  dispatch: () => {}
});

export const useMaster = () => useContext(MasterContext);

export const Master = ({ children }) => {
  //TODO: add dynamic reducer
  const [state, orginalDispatch] = useReducer(reducer, { count: 0 });

  const dispatch = action => {
    const { type } = action;
    orginalDispatch(action);
    emitter.emit(type);
  };

  const actorProvider = { state, dispatch };

  return (
    <MasterContext.Provider value={actorProvider}>
      {children}
    </MasterContext.Provider>
  );
};
