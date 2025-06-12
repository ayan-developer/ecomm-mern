// src/components/ProductCard.jsx
const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="font-semibold text-lg mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-2">${product.price}</p>
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
