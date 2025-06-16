import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import ProductForm from './ProductForm';

const EditProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProductData(response.data);
      } catch (error) {
        console.error('Failed to fetch product:', error);
        alert('Product not found');
      }
    };
    fetchProduct();
  }, [id]);

  const handleEditProduct = async (data) => {
    try {
      await axios.put(`http://localhost:5000/api/products/${id}`, data);
      navigate('/admin/products');
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Failed to update product');
    }
  };

  if (!productData) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Edit Product</h2>
      <ProductForm defaultValues={productData} onSubmit={handleEditProduct} />
    </div>
  );
};

export default EditProductPage;