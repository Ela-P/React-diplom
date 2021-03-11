import 'regenerator-runtime/runtime';
import { all } from 'redux-saga/effects';

import apiCallMapping from '../api/apiCallsMapping';

function* rootSaga() {
    yield all([apiCallMapping()]);
}

export default rootSaga;