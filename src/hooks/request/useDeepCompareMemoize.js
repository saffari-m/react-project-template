import React from "react";
import { isEqual } from "@lib/lodash";

const useDeepCompareMemoize = (value) => {
  const ref = React.useRef();
  const signalRef = React.useRef(0);

  if (!isEqual(value, ref.current)) {
    ref.current = value;
    signalRef.current += 1;
  }

  return [signalRef.current];
};

export default useDeepCompareMemoize;