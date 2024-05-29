import { all, put, takeEvery } from "redux-saga/effects";
import { errorActions } from "./ErrorSlice";

function* listener({type, payload}) {
  if (!/Fail/.test(type)) return
  yield put(errorActions.setError(type, payload))
}

function* actionWatcher() {
  yield takeEvery('*', listener)
}

export default function* errorSaga() {
  yield all([actionWatcher()])
}
