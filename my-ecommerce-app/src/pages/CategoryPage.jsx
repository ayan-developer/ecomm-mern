// src/pages/CategoryPage.jsx
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import products from '../data/dummyProducts';

const CategoryPage = () => {
  const { category } = useParams();

  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl md:text-4xl font-bold mb-6 capitalize">
        {category} Collection
      </h2>
      {filteredProducts.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
