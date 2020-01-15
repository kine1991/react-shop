import { combineReducers } from "redux";

import userReducer from './user/user.reducer';
import mainReducer from './main/main.reducer';

export default combineReducers({
  user: userReducer,
  main: mainReducer
});
