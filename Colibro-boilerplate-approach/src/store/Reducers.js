import { combineReducers } from "redux";
import { PagReducer } from "../services/common/Pag/PagSlice";

export default combineReducers({
  Pag: PagReducer,
});
