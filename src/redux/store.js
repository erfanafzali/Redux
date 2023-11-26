// 1. add createStore(itemReducer)
// 2. export default store 
// 3. create rootReducer in redux folder

import { createStore } from "redux";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer)

export default store