import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import GithubReposPageLayout from '../components/GithubUsersPageLayout';

import { GET_GITHUB_REPOS_REQUEST } from '../actions';

const GithubReposContainer = () => {
    const dispatch = useDispatch();

    const { repositories, isLoading } = useSelector(state => state.gitPage);

    useEffect(() => {
        dispatch(GET_GITHUB_REPOS_REQUEST())
    }, [dispatch]);

    return (
        <GithubReposPageLayout repositories={repositories} isLoading={isLoading}/>
    );
};

export default GithubReposContainer;



