import React, { useReducer, useContext, useRef } from "react";
import { emitter } from "./actionListener";

const MasterContext = React.createContext({
  state: {},
  dispatch: () => {},
  setReducer: () => {}
});

export const useMaster = () => useContext(MasterContext);

export const Master = ({ children }) => {
  const reducerRef = useRef([]);

  const setReducer = reducer => {
    reducerRef.current.push(reducer);
  };

  const masterReducer = (state, action) => {
    const newState = reducerRef.current.reduce((result, currentReducer) => {
      const { action: actionName, name, handler } = currentReducer;
      const value = handler(state[name] ? state[name] : null, action.payload);

      if (action.type === actionName) {
        result = { ...state, [name]: value };
      }
      return result;
    }, {});

    return newState;
  };

  const [state, originalDispatch] = useReducer(masterReducer, {});

  const dispatch = action => {
    const { type } = action;
    originalDispatch(action);
    emitter.emit(type);
  };

  const master = { state, dispatch, setReducer };

  return (
    <MasterContext.Provider value={master}>{children}</MasterContext.Provider>
  );
};
