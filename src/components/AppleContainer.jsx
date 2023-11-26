// 1. create ui page
// 2. call useSelector for use reducer state
// 3. call dispatch to use type dispath , payload
// 4. add root state to state => state.item

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyApple } from "../redux/apple/appleActions";

function AppleContainer() {
  const [value, setValue] = useState();
  const state = useSelector((state) => state.apple);
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
      <button onClick={() => dispatch(buyApple(value))}>Buy Apple</button>
      <button onClick={() => dispatch(buyApple())}>Buy One Apple</button>
    </div>
  );
}

export default AppleContainer;
