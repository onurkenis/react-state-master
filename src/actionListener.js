import mitt from "mitt";
import { useEffect } from "react";
import PropTypes from "prop-types";

export let emitter = mitt();

export const ActionListener = ({ action, effect }) => {
  useEffect(() => {
    emitter.on(action, effect);
    return () => {
      emitter.off(action, effect);
    };
  }, [action, effect]);

  return null;
};

ActionListener.propTypes = {
  action: PropTypes.string,
  effect: PropTypes.func
};