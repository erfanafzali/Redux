import { combineReducers } from "redux";
import appleReducer from "./apple/appleReducer";
import bananaReducer from "./banana/bananaReducer";
import orangeReducer from "./orange/orangeReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  apple: appleReducer,
  banana: bananaReducer,
  orange: orangeReducer,
  users: userReducer,
});

export default rootReducer;
