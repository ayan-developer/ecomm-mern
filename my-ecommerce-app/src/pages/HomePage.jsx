import React from 'react';
import ProductCard from '../components/ProductCard';
import HeroBanner from '../components/HeroBanner';
import { Link } from 'react-router-dom';
import dummyProducts from '../data/dummyProducts';
import CategoryGallery from '../components/CategoryGallery';

const HomePage = () => {
  // 10 dummy products with working image links
  const products = [
    {
      _id: '1',
      name: 'Wireless Headphones',
      description: 'High-quality over-ear headphones with noise-canceling.',
      price: 99.99,
      image: 'https://source.unsplash.com/featured/?headphones',
    },
    {
      _id: '2',
      name: 'Smart Watch',
      description: 'Stylish smart watch with fitness tracking features.',
      price: 149.99,
      image: 'https://source.unsplash.com/featured/?smartwatch',
    },
    {
      _id: '3',
      name: 'Bluetooth Speaker',
      description: 'Portable speaker with rich bass and crystal-clear sound.',
      price: 59.99,
      image: 'https://source.unsplash.com/featured/?speaker',
    },
    {
      _id: '4',
      name: 'Laptop Backpack',
      description: 'Waterproof and durable backpack for all your tech needs.',
      price: 79.99,
      image: 'https://source.unsplash.com/featured/?backpack',
    },
    {
      _id: '5',
      name: 'Gaming Mouse',
      description: 'Ergonomic mouse with customizable RGB lighting.',
      price: 39.99,
      image: 'https://source.unsplash.com/featured/?gaming-mouse',
    },
    {
      _id: '6',
      name: '4K Monitor',
      description: 'Ultra HD monitor for the best visual experience.',
      price: 299.99,
      image: 'https://source.unsplash.com/featured/?monitor',
    },
    {
      _id: '7',
      name: 'Mechanical Keyboard',
      description: 'Tactile keys for satisfying typing and gaming.',
      price: 89.99,
      image: 'https://source.unsplash.com/featured/?keyboard',
    },
    {
      _id: '8',
      name: 'Wireless Charger',
      description: 'Fast charging pad compatible with all smartphones.',
      price: 29.99,
      image: 'https://source.unsplash.com/featured/?charger',
    },
    {
      _id: '9',
      name: 'VR Headset',
      description: 'Experience the next level of gaming with virtual reality.',
      price: 199.99,
      image: 'https://source.unsplash.com/featured/?vr-headset',
    },
    {
      _id: '10',
      name: 'Smart Thermostat',
      description: 'Control your home temperature with ease.',
      price: 129.99,
      image: 'https://source.unsplash.com/featured/?thermostat',
    },
  ];

  return (
    <>
      <HeroBanner/>
      <div>
        <CategoryGallery/>
      </div>
    <div className="container mx-auto p-4">
        
      <h1 className="text-2xl md:text-4xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dummyProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
          // <Link to={`/category/${product.category}`}/>
        ))}
      </div>
      

    </div>
    </>
  );
};

export default HomePage;
