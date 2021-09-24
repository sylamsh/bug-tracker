import axios from 'axios';
const API = axios.create({ baseURL: "http://localhost:3350" })

export const fetchBugs = () => API.get('/bugs');
export const createBug = (newBug) => API.post('/bugs', newBug);
export const updateBug = (id, updatedBug) => API.patch(`/bugs/${id}`, updatedBug);
export const deleteBug = (id) => API.delete(`/bugs/${id}`);
export const resolveBug = (id) => API.patch(`/bugs/${id}/isResolved`);

export const signin = (userObject) => API.post('/user/signin', userObject)
export const signup = (userObject) => API.post('/user/signup', userObject)