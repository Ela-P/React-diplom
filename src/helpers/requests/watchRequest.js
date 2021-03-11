import { call, put, takeEvery, delay } from 'redux-saga/effects';
import { isEmpty } from 'lodash' ;

import { POSTFIXES, REQUEST_PENDING_DELAY } from '../../constants/actionPostfixes';
import apiCallMapping from '../../api/apiCallsMapping';
import createActionWithPostfix from './actionPostfixCreator';

const { REQUEST_POSTFIX, SUCCESS_POSTFIX, FAIL_POSTFIX } = POSTFIXES;

function* sendRequest(action) {
    try {
        const callRequesMethod = apiCallMapping(action);
        const response = yield call(callRequesMethod, action.payload);

    yield put(
        createActionWithPostfix(
        action,
        { response: !isEmpty(response) ? response.data : {}, actionPayload: action.payload },
        SUCCESS_POSTFIX
        )
    );
} catch (error) {
    yield put(
        createActionWithPostfix(
        action,
        { response: !isEmpty(error.response) ? error.response.data.message : '' },
        FAIL_POSTFIX
        )
    );
    }
}

function* requestEnded() {
    yield delay(REQUEST_PENDING_DELAY);
}

const isApiCallStartAction = (action) => action.type.endsWith(REQUEST_POSTFIX);

const isApiCallEndedAcnion = (action) => 
    action.type.endsWith(SUCCESS_POSTFIX) || action.type.endsWith(FAIL_POSTFIX);

function* apiCallSaga() {
    yield takeEvery(isApiCallStartAction, sendRequest);
    yield takeEvery(isApiCallEndedAcnion, requestEnded);

}

export default apiCallSaga;