import { createStore } from "redux";
import reducer from "./reducers";

const store = createStore(reducer);

// Or
// If adding middleware
// const store = createStore(reducer, applyMiddleware(...));

export default store;
