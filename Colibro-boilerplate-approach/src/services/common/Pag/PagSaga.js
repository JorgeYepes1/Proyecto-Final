import { all, put, takeLatest } from "redux-saga/effects";
import { PagActions } from "./PagSlice";
import  Api  from "../../../common/api/api"


function* getHistorys({ payload }) {
  console.log(payload)
  const his = yield Api.get(`/Historia/byGenreAndTitle/${payload.titulo}/${payload.genero}`) //`/sisben/number/${payload.numbSisben}/letter/${payload.letterSisben[0]}`
  console.log(his)
  yield put(PagActions.setHistorys(his.payload))

}

function* getAllHistorys() {
  const his = yield Api.get('/Historia/all')
  console.log(his.payload)
  yield put(PagActions.setHistorys(his.payload))
}

function* getHistorysByGenre({ payload }) {
  const his = yield Api.get(`/Historia/byGenre/${payload.genero}`)
  console.log(payload)
  console.log(his.payload)
  yield put(PagActions.setHistorys(his.payload))
}

function* getHistorysByTitle({ payload }) {
  const his = yield Api.get(`/Historia/byTitle/${payload.titulo}`)
  yield put(PagActions.setHistorys(his.payload))
}

function* getAuthor({ payload }) {
  const au = yield Api.get(`/Historia/author/${payload.id}`)
  yield put(PagActions.setAuthor(au.payload))
}
function* getBooks({ payload }) {
  const au = yield Api.get(`/Historia/books/${payload.id}`)
  yield put(PagActions.setBooks(au.payload))
}
function* getAudioBooks({ payload }) {
  const au = yield Api.get(`/Historia/audiobooks/${payload.id}`)
  yield put(PagActions.setAudioBooks(au.payload))
}
function* getComics({ payload }) {
  const au = yield Api.get(`/Historia/comics/${payload.id}`)
  yield put(PagActions.setComics(au.payload))
}

function* actionWatcher() {
  yield takeLatest(PagActions.getHistorys, getHistorys)
  yield takeLatest(PagActions.getAllHistorys, getAllHistorys)
  yield takeLatest(PagActions.getHistorysByGenre, getHistorysByGenre)
  yield takeLatest(PagActions.getHistorysByTitle, getHistorysByTitle)
  yield takeLatest(PagActions.getComics, getComics)
  yield takeLatest(PagActions.getBooks, getBooks)
  yield takeLatest(PagActions.getAudioBooks, getAudioBooks)
  yield takeLatest(PagActions.getAuthor, getAuthor)




}

export default function* PagSaga() {
  yield all([actionWatcher()])
}
