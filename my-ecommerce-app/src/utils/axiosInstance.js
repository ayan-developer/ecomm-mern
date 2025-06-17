import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:5000/api', 
  withCredentials: true, // if using cookies for auth
});

instance.interceptors.request.use((config) => {
  // Add auth token if needed
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default instance;