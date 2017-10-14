import { createStore } from "redux";
import reducer from "./reducers";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Or
// If adding middleware
// const store = createStore(reducer, applyMiddleware(...));

export default store;
