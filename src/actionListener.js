import mitt from "mitt";
import { useEffect } from "react";

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
