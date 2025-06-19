import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import dummyProducts from '../data/dummyProducts';
import { getAllProducts } from '../services/productService';
import { IMAGE_BASE_URL } from '../constants';

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await getAllProducts();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    try {
      await axios.delete(`/api/admin/products/${id}`);
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.error('Failed to delete product:', error);
    }
  };

  if (loading) return <p>Loading products...</p>;

  return (
    <table className="min-w-full table-auto border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border px-4 py-2">Image</th>
          <th className="border px-4 py-2">Name</th>
          <th className="border px-4 py-2">Category</th>
          <th className="border px-4 py-2">Price</th>
          <th className="border px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product._id} className="text-center">
            <td className="border px-4 py-2">
              <img  src={`${IMAGE_BASE_URL}${product.image}`} className="h-16 mx-auto" />
            </td>
            <td className="border px-4 py-2">{product.name}</td>
            <td className="border px-4 py-2">{product.category}</td>
            <td className="border px-4 py-2">₹{product.price}</td>
            <td className="border px-4 py-2 space-x-2">
              <Link to={`/admin/edit/${product._id}`} className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded">
                Edit
              </Link>
              <button
                onClick={() => deleteProduct(product._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
