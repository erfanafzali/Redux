// 1. create ui page
// 2. call useSelector for use reducer state
// 3. call dispatch to use type dispath , payload

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function AppleContainer() {
  const [value, setValue] = useState();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Apple Nubmer : {state.numOfApple}</h2>
      <input
        type="number"
        value={value}
        id="value"
        name="value"
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch({ type: "BUY_APPLE", payload: 1 })}>
        Buy One Apple
      </button>
      <button onClick={() => dispatch({ type: "BUY_APPLE", payload: value })}>
        Buy Apple
      </button>
    </div>
  );
}

export default AppleContainer;
