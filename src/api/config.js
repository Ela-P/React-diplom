import axios from 'axios';

export const baseURL = "https://api.github.com/users/octocat/repos";

const config = {
    baseURL,
};

const api = axios.create(config);

export default api;
