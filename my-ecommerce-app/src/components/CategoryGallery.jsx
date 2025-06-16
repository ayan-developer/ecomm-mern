import { useNavigate } from "react-router-dom";
import dummyProducts from "../data/dummyProducts";

const CategoryGallery = () => {
  const navigate = useNavigate();

  // Get unique categories with one image per category
  const categories = Array.from(
    new Map(dummyProducts.map((p) => [p.category, p])).values()
  );

  const handleClick = (item) => {
    navigate(`/category/${item.category.toLowerCase()}`);
  };

  return (
    <div className="w-full px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Shop by Category</h2>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {categories.map((item) => (
          <div
            key={item._id}
            className="relative w-full overflow-hidden rounded-lg cursor-pointer break-inside-avoid group"
            onClick={() => handleClick(item)}
          >
            <img
              src={item.image}
              alt={item.category}
              className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:blur-sm group-hover:brightness-50"
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 text-white p-4 text-center">
              <div>
                <h3 className="text-2xl font-bold mb-1">{item.category}</h3>
                <p className="text-sm">Click to view all</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGallery;
