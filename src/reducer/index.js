import { combineReducers } from "redux";

import AppReducer from "src/modules/app/reducer/AppReducer";

export default combineReducers({
  app: AppReducer,
});
