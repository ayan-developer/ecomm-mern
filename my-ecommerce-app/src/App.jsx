import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import CategoryPage from './pages/CategoryPage';
import AdminDashboard from './pages/AdminDashboard';
import AddProductPage from './pages/AddProductPage';
import EditProductPage from './pages/EditProductPage';
// import Products from './pages/Products';
// import Contact from './pages/Contact';

const App = () => {
  return (
    <>
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
            <Route path="/" element={<HomePage />} />    {/* 👈 Add this */}
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/create" element={<AddProductPage />} />
            <Route path="/admin/edit/:id" element={<EditProductPage />} />
          </Routes>
        </main>
      </div>
    </Router>
    <footer className="bg-gray-200 text-center p-4">
      &copy; {new Date().getFullYear()} MyShop. All rights reserved.
    </footer>
        </>
  );
};

export default App;
