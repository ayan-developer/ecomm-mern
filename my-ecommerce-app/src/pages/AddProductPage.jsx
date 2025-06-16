import ProductForm from "../components/ProductForm";
import axios from "axios";

const AddProductPage = () => {
  const handleAddProduct = async (formData) => {
    try {
      const response = await axios.post("http://localhost:5000/api/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Product added successfully!");
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
      <ProductForm onSubmit={handleAddProduct} />
    </div>
  );
};

export default AddProductPage;
