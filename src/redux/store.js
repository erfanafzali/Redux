// 1. add createStore(itemReducer)
// 2. export default store
// 3. create rootReducer in redux folder
// 4. add applyMiddlewere(thunk)
// 5. npm i @redux-devtools/extension
// 6. add composWithDevTools(applyMiddlewere(thunk))

import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
