import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import AppleContainer from "./components/AppleContainer";
import BananaContainer from "./components/BananaContainer";

function App() {
  return (
    <Provider store={store}>
      <AppleContainer />
      <BananaContainer />
    </Provider>
  );
}

export default App;

// 1. npm i redux react-redux
// 2. create redux folder > item folder > item file js
// 3. create reducer.js & action.js & types.js file
// 4. create store.js in redux folder
// 5. create rootReducer.js in redux folder
// 6. create container.jsx in components folder
// 7. add provider on app.jsx
// 8. add store to Provider
