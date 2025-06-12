// src/components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          MyShop
        </Link>
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <Link to="/cart" className="flex items-center">
            <FaShoppingCart className="mr-1" /> Cart
          </Link>
          <Link to="/login" className="flex items-center">
            <FaUser className="mr-1" /> Login
          </Link>
        </div>
        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow">
          <Link
            to="/cart"
            className="block p-4 border-b border-gray-200"
            onClick={() => setMenuOpen(false)}
          >
            <FaShoppingCart className="inline mr-2" /> Cart
          </Link>
          <Link
            to="/login"
            className="block p-4 border-b border-gray-200"
            onClick={() => setMenuOpen(false)}
          >
            <FaUser className="inline mr-2" /> Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
