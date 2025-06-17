import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const ProductForm = ({ defaultValues = {}, onSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues,
  });

  const [preview, setPreview] = useState(null);
  const imageFile = watch('image');

  useEffect(() => {
    if (imageFile && imageFile[0]) {
      const file = imageFile[0];
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  }, [imageFile]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" encType="multipart/form-data">
      <div>
        <label className="block font-medium mb-1">Name</label>
        <input
          type="text"
          {...register('name', { required: 'Name is required' })}
          className="w-full border px-3 py-2 rounded"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block font-medium mb-1">Category</label>
        <input
          type="text"
          {...register('category', { required: 'Category is required' })}
          className="w-full border px-3 py-2 rounded"
        />
        {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
      </div>

      <div>
        <label className="block font-medium mb-1">Image</label>
        <input
          type="file"
          accept="image/*"
          {...register('image', { required: !defaultValues.image && 'Image is required' })}
          className="w-full border px-3 py-2 rounded"
        />
        {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
        {preview && <img src={preview} alt="Preview" className="w-32 h-32 mt-2 object-cover rounded" />}
        {!preview && defaultValues.image && (
          <img src={defaultValues.image} alt="Current" className="w-32 h-32 mt-2 object-cover rounded" />
        )}
      </div>

      <div>
        <label className="block font-medium mb-1">Price (₹)</label>
        <input
          type="number"
          step="0.01"
          {...register('price', {
            required: 'Price is required',
            valueAsNumber: true,
            min: { value: 1, message: 'Minimum price ₹1' },
          })}
          className="w-full border px-3 py-2 rounded"
        />
        {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
      </div>

      <div>
        <label className="block font-medium mb-1">Description</label>
        <textarea
          {...register('description', { required: 'Description is required' })}
          className="w-full border px-3 py-2 rounded"
        ></textarea>
        {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        {isSubmitting ? 'Saving...' : 'Save Product'}
      </button>
    </form>
  );
};

export default ProductForm;
