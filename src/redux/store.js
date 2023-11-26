// 1. add createStore(itemReducer)
// 2. export default store 


import { createStore } from "redux";
import appleReducer from "./apple/appleReducer";

const store = createStore(appleReducer)

export default store