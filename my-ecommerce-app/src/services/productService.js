import axios from '../utils/axiosInstance';

export const createProduct = (formData) => {
  return axios.post('/products', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const updateProduct = (id, formData) => {
  return axios.put(`/products/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const deleteProduct = (id) => {
  return axios.delete(`/products/${id}`);
};

export const getAllProducts = () => {
  return axios.get('/products');
};

export const getProductById = (id) => {
  return axios.get(`/products/${id}`);
};
