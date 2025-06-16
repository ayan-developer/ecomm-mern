import AdminSidebar from "../components/AdminSidebar";
import ProductTable from "../components/ProductTable";

const AdminDashboard = () => (
  <div className="flex">
    <AdminSidebar />
    <div className="flex-1 p-6">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>
      <ProductTable />
    </div>
  </div>
);

export default AdminDashboard;
