import axios from 'axios';
const API = axios.create({ baseURL: "http://localhost:3350" })
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

export const fetchBugs = () => API.get('/bugs');
export const createBug = (newBug) => API.post('/bugs', newBug);
export const updateBug = (id, updatedBug) => API.patch(`/bugs/${id}`, updatedBug);
export const deleteBug = (id) => API.delete(`/bugs/${id}`);
export const resolveBug = (id) => API.patch(`/bugs/${id}/isResolved`);
export const devRespond = (id, devResponse) => API.patch(`/bugs/${id}/devRespond`, devResponse);

export const signin = (userObject) => API.post('/user/signin', userObject);
export const signup = (userObject) => API.post('/user/signup', userObject);
export const fetchDevs = () => API.get('/user/dev');