import { combineReducers } from "redux"; // Pure JavaScript

import itemReducer from './itemReducer'


export default combineReducers({
  item: itemReducer
});
