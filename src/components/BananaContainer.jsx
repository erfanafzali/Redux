import { useDispatch, useSelector } from "react-redux";
import { buyBanana } from "../redux/banana/bananaActions";

function BananaContainer() {
  const state = useSelector((state) => state.banana);
  const dispatch = useDispatch();
  return (
    <div>
      <h2> Banana Number : {state.numOfBanana}</h2>
      <button onClick={() => dispatch(buyBanana())}>Buy Banana</button>
    </div>
  );
}
export default BananaContainer; 
