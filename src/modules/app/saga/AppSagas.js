import { takeLatest, all, fork, put, call, delay } from 'redux-saga/effects';
import * as appTypes from '../actions/appTypes';
import * as appActions from '../actions/appActions';
import { fetchPostsApi } from '../api/appApis';
import toast from 'src/utils/toast';

function* createPost({ data, resolve, reject }) {
  try {
    yield delay(2000);
    yield put(appActions.appendPost(data));
    yield call(toast.success, 'Post created successfully!');
    resolve();
  } catch (error) {
    reject();
  }
}

function* fetchPosts(action) {
  try {
    yield delay(2000);
    let data = yield call(fetchPostsApi);
    data = data.splice(0, 10);
    yield put(appActions.setPosts(data));
  } catch (error) {
    console.log(error);
  }
}

export function* watchSagas() {
  yield takeLatest(appTypes.CREATE_POST, createPost);
  yield takeLatest(appTypes.FETCH_POSTS, fetchPosts);
}

export default function* runSagas() {
  yield all([fork(watchSagas)]);
}
