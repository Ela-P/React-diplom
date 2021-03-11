import {createAction} from 'redux-actions';

export const GET_GITHUB_REPOS_REQUEST = createAction('GET_GITHUB_REPOS_REQUEST');
export const GET_GITHUB_REPOS_SUCCESS = createAction('GET_GITHUB_REPOS_SUCCESS');
export const GET_GITHUB_REPOS_FAIL = createAction('GET_GITHUB_REPOS_FAIL');