import { combineReducers } from "redux";
import appleReducer from "./apple/appleReducer";
import bananaReducer from "./banana/bananaReducer";

const rootReducer = combineReducers({
    apple: appleReducer,
    banana: bananaReducer
})


export default rootReducer