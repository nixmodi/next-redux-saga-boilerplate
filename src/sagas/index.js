import { all } from "redux-saga/effects";
import AppSagas from "src/modules/app/saga/AppSagas";

function* rootSaga() {
  yield all([AppSagas()]);
}

export default rootSaga;
