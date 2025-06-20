import axios from '../utils/axiosInstance';

export const userRegister = (formData) => {
  return axios.post('/users/register', formData);
};

export const userLogin = (formData) => {
    console.log(formData);
  return axios.post('/users/login', formData);
};

export const userLogout = (id) => {
  return axios.delete('/users/logout', formData);
};