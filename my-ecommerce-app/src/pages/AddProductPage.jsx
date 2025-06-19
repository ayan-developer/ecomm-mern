import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createProduct } from '../services/productService';
import ProductForm from './ProductForm'; // Adjust path if needed

const AddProductPage = () => {
  const navigate = useNavigate();

 const handleAddProduct = async (data) => {
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('category', data.category);
      formData.append('price', data.price);
      formData.append('description', data.description);
      formData.append('image', data.image[0]);

      await createProduct(formData);
      alert('Product added successfully!');
      navigate('/admin/products');
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
      <ProductForm onSubmit={handleAddProduct} />
    </div>
  );
};

export default AddProductPage;
