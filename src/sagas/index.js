import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchData() {

  const json = yield fetch('https://www.scorebat.com/video-api/v1')
    .then(response => response.json(), error => console.error(error));

  yield put({ type: "DATA_RECEIVED", json: json, });
}

function* actionWatcher() {
  yield takeLatest('GET_DATA', fetchData)
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}