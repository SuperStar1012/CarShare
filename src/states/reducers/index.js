import { combineReducers } from "redux";
import cartReducer from "./cartReducer";

const reducers = combineReducers({
  product: cartReducer,
});

export default reducers;
