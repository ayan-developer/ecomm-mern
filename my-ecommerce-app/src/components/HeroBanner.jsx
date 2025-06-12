// src/components/HeroBanner.jsx
import { motion } from 'framer-motion';
// import heroImage from '../assets/hero.jpg';

const HeroBanner = () => {
    const heroImage = "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg";

  return (
    <section className="relative bg-gray-100">
      <motion.img
        src={heroImage}
        alt="Hero"
        className="w-full h-[50vh] md:h-[70vh] object-cover"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
      />
      <div className="absolute inset-0 bg-lead bg-opacity-40 flex flex-col justify-center items-center text-center">
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to MyShop
        </motion.h1>
        <motion.p
          className="text-base md:text-xl text-white mt-2 md:mt-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Shop the best products at unbeatable prices!
        </motion.p>
      </div>
    </section>
  );
};

export default HeroBanner;
