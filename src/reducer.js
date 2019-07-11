import { useMaster } from "./master";
import { useEffect } from "react";

export const Reducer = reducer => {
  const { setReducer } = useMaster();

  useEffect(() => {
    setReducer(reducer);
  });

  return null;
};