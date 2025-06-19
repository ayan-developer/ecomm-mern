import React from 'react';
import { useForm } from 'react-hook-form';

const ProductForm = ({ onSubmit, defaultValues = {} }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" className="space-y-4">
      <div>
        <label>Name</label>
        <input
          {...register('name', { required: 'Name is required' })}
          className="border p-2 w-full"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <label>Category</label>
        <input
          {...register('category', { required: 'Category is required' })}
          className="border p-2 w-full"
        />
        {errors.category && <p className="text-red-500">{errors.category.message}</p>}
      </div>

      <div>
        <label>Image</label>
        <input
          type="file"
          {...register('image', { required: 'Image is required' })}
          className="w-full"
        />
        {errors.image && <p className="text-red-500">{errors.image.message}</p>}
      </div>

      <div>
        <label>Price</label>
        <input
          type="number"
          step="0.01"
          {...register('price', {
            required: 'Price is required',
            min: { value: 0, message: 'Price must be positive' },
          })}
          className="border p-2 w-full"
        />
        {errors.price && <p className="text-red-500">{errors.price.message}</p>}
      </div>

      <div>
        <label>Description</label>
        <textarea
          {...register('description')}
          className="border p-2 w-full"
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default ProductForm;
