import api from '../../../api/config';

export const getGitRepos = () => api.get(`/repos`);



