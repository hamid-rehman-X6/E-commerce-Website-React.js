import { createStore } from "redux";
import { productDetailReducer } from "./Cart-Redux/cartReducer";

const store = createStore(productDetailReducer);

export default store;
