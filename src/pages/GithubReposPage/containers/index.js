import React from 'react';
import { useEffect } from 'react'; 
import {useDispatch, useSelector} from 'react-redux';

import GithubReposPageLayout from '../components/GithubUsersPageLayout';

import { GET_GITHUB_REPOS_REQUEST } from '../actions';

const GithubReposContainer = () => {
    
    const dispatch = useDispatch();

    const { names, isLoading } = useSelector(state => state.gitPage);

    useEffect(() => {
        dispatch(GET_GITHUB_REPOS_REQUEST({}))
    }, [dispatch]);

    return (
        <GithubReposPageLayout names={names} isLoading={isLoading}/>
    );
};

export default GithubReposContainer;



