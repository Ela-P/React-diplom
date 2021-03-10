import 'regenerator-runtime/runtime';
import { all } from 'redux-saga/effects';

import apiCallSaga from '../helpers/requests/watchRequest';

function* rootSaga() {
    yield all([apiCallSaga()]);
}

export default rootSaga;