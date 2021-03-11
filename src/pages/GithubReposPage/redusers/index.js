import { handleActions } from 'redux-actions';

import * as actions from '../actions';

const defaultState = {
    names: [],
    isLoading: false,
    errors: ''
};

const gitPage = handleActions({
    [actions.GET_GITHUB_REPOS_REQUEST]: (state) => ({
        ...state,
        isLoading: true
    }),
    [actions.GET_GITHUB_REPOS_SUCCESS]: (state, { payload }) => {
        return {
        ...state,
        isLoading: false,
        names: payload.response
        }
    },
    [actions.GET_GITHUB_REPOS_FAIL]: (state, { payload }) => ({
        ...state,
        isLoading: false,
        errors: payload.response
    }),

}, defaultState);

export default gitPage;
