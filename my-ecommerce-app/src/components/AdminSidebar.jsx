import { Link } from 'react-router-dom';

const AdminSidebar = () => (
  <div className="w-64 bg-gray-800 text-white min-h-screen p-4">
    <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
    <nav className="space-y-4">
      <Link to="/admin" className="block hover:underline">All Products</Link>
      <Link to="/admin/create" className="block hover:underline">Add Product</Link>
    </nav>
  </div>
);

export default AdminSidebar;
