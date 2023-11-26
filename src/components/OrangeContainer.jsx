import { useDispatch, useSelector } from "react-redux";
import { buyOrange } from "../redux/orange/orangeActions";

function OrangeContainer() {
  const state = useSelector((state) => state.orange);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Orange Number: {state.numOfOrange}</h2>
      <button onClick={() => dispatch(buyOrange())}>Buy Orange</button>
    </div>
  );
}

export default OrangeContainer;
