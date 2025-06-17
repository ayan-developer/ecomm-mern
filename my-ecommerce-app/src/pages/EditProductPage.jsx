import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { getProductById, updateProduct } from '../../src/services/productService';

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

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        // for image field, use File object if new image is selected
        if (key === 'image' && value[0]) {
          formData.append(key, value[0]);
        } else {
          formData.append(key, value);
        }
      });

      await updateProduct(id, formData);
      alert('Product updated successfully!');
      navigate('/admin/products');
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Failed to update product');
    }
  };

  if (!initialData) return <p className="p-4">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            {...register('name', { required: 'Name is required' })}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block font-medium">Category</label>
          <input
            type="text"
            {...register('category', { required: 'Category is required' })}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
        </div>

        <div>
          <label className="block font-medium">Price (₹)</label>
          <input
            type="number"
            {...register('price', { required: 'Price is required', valueAsNumber: true })}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
        </div>

        <div>
          <label className="block font-medium">Description</label>
          <textarea
            {...register('description', { required: 'Description is required' })}
            className="w-full border px-3 py-2 rounded"
          ></textarea>
          {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
        </div>

        <div>
          <label className="block font-medium">Image (upload new if needed)</label>
          <input
            type="file"
            {...register('image')}
            accept="image/*"
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          {isSubmitting ? 'Updating...' : 'Update Product'}
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;
