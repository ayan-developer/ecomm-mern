// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import Logout from '../pages/Logout';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false); 
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token'); 
    setIsLoggedIn(!!token); // true if token exists
  }, []);

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
         
        </div>
          {isLoggedIn ? (
          <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
              >
                <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user" />
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow rounded-lg z-50">
                  <div className="px-4 py-3 border-b">
                    <span className="block text-sm text-gray-900">Bonnie Green</span>
                    <span className="block text-sm text-gray-500">name@flowbite.com</span>
                  </div>
                  <ul>
                    <li><Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-100">Dashboard</Link></li>
                    <li><Link to="/settings" className="block px-4 py-2 hover:bg-gray-100">Settings</Link></li>
                    <li><Link to="/earnings" className="block px-4 py-2 hover:bg-gray-100">Earnings</Link></li>
                    <li><Logout setIsLoggedIn={setIsLoggedIn} /></li>
                  </ul>
                </div>
              )}
          </div> ) : ( 
          <Link to="/login" className="flex items-center">
            <FaUser className="mr-1" /> Login
          </Link>)
          }

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
