import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';

import {ROUTES} from '../../../routs/routeNames';

import GithubReposPageLayout from '../components/GithubUsersPageLayout';

import { GET_GITHUB_REPOS_REQUEST } from '../actions';

const GithubReposContainer = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { repositories, isLoading } = useSelector(state => state.gitPage);

    const handleGoUserDetails = useCallback((id) => {
        history.push(`${ROUTES.GET_GITHUB_REPOS_REQUEST}/${id}`)
    }, [history])

    useEffect(() => {
        dispatch(GET_GITHUB_REPOS_REQUEST())
    }, [dispatch]);

    return (
        <GithubReposPageLayout repositories={repositories} isLoading={isLoading} handleGoUserDetails={handleGoUserDetails} />
    );
};

export default GithubReposContainer;



