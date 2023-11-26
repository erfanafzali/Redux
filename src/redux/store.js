// 1. add createStore(itemReducer)
// 2. export default store
// 3. create rootReducer in redux folder
// 4. add applyMiddlewere(thunk)

import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
