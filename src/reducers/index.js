import { combineReducers } from "redux";

import authReducer from "./authReducer";
import orderReducer from "./orderReducer";
import passwordReset from "./passwordResetReducer";

export default combineReducers({
  auth: authReducer,
  order: orderReducer,
  passwordReset: passwordReset,
});
