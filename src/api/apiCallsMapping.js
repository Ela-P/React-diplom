import * as gitPageActions from '../pages/GithubReposPage/actions/index';
import * as gitPageApi from '../pages/GithubReposPage/api/index';


const apiCallMapping = (action) => {
    const mapping ={
     [gitPageActions.GET_GITHUB_REPOS_REQUEST]: gitPageApi.getGitRepos,
    };

    if (!mapping.hasOwnProperty(action.type)) {
        throw 'Not mapped action';
    }

    return mapping[action.type];
};

export default apiCallMapping;