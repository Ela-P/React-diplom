import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ROUTES } from "./routeNames";

import HomePageContainer from "../pages/HomePage/container/HomePageContainer";
import GithubReposContainer from '../pages/GithubReposPage/containers/index';
import ReposDetailsPageContainer from '../pages/ReposDetailsPage/containers/ReposDetailsPageContainer';


const Routes = () => {
    return (
        <Switch>
            <Route exact path={ROUTES.HOME_PAGE} component={HomePageContainer} />
            <Route exact path={ROUTES.GITHUB_PAGE} component={GithubReposContainer} />
            <Route exact path={ROUTES.GITHUB_PAGE_REPOS} component={ReposDetailsPageContainer} />
          
        </Switch>
    );
}

export default Routes;