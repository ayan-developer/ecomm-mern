import axios from '../utils/axiosInstance';

export const createProduct = (formData) => {
  return axios.post('/products/create', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const updateProduct = (id, formData) => {
   for (let pair of formData.entries()) {
          console.log(pair[0], pair[1]);
        }
  return axios.put(`/products/update/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const deleteProduct = (id) => {
  return axios.delete(`/products/delete/${id}`);
};

export const getAllProducts = () => {
  return axios.get('/products/all-products');
};

export const getProductById = (id) => {
  return axios.get(`/products/get-product-by-Id/${id}`);
};
