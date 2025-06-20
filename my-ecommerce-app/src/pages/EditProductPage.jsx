import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { getProductById, updateProduct } from '../../src/services/productService';
import ProductForm from './ProductForm';

const EditProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  // Fetch product and prefill the form
  useEffect(() => {
    getProductById(id)
      .then((res) => {
        setInitialData(res.data);
        reset(res.data); // prefill form
      })
      .catch((err) => {
        console.error('Failed to fetch product:', err);
        alert('Failed to fetch product.');
      });
  }, [id, reset]);

  const handleUpdateProduct = async (data) => {
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('category', data.category);
      formData.append('price', data.price);
      formData.append('description', data.description);
      formData.append('image', data.image[0]);
     
      await updateProduct(id, formData);
      alert('Product updated successfully!');
      navigate('/admin');
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Failed to update product');
    }
  };

  if (!initialData) return <p className="p-4">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
      <ProductForm onSubmit={handleUpdateProduct} defaultValues={initialData} />
    </div>
  );
};

export default EditProductPage;
