import { fork, all } from "redux-saga/effects";
import PagSaga from '../services/common/Pag/PagSaga'

export default function* rootSaga() {
  yield all([fork(PagSaga)]);
}
