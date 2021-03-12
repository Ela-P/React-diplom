import axios from 'axios';

const baseURL = "http://api.github.com";

const config = {
    baseURL,
};

const api = axios.create(config);

export default api;
