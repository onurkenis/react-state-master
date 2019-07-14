import { useMaster } from "./master";
import { useEffect } from "react";
import PropTypes from "prop-types";

export const Reducer = reducer => {
  const { setReducer } = useMaster();

  useEffect(() => {
    setReducer(reducer);
  });

  return null;
};

Reducer.propTypes = {
  name: PropTypes.func,
  action: PropTypes.string,
  handler: PropTypes.func
};