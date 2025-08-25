import { motion } from "motion/react";
import Search from "../icons/Search";
import HeaderTopSection from "./HeaderTopSection";
import Naaavigation from "./Naaavigation";
import HeaderMobile from "./HeaderMobile";

export default function Header() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  // Floating particles animation
  const floatingParticles = Array.from({ length: 6 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-blue-200 rounded-full opacity-30"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay: Math.random() * 2,
      }}
    />
  ));

  return (
    <motion.header 
      className=""
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Top Section - Contact Info & Appointment Button */}
      <HeaderTopSection/>

      {/* Main Navigation */}
      <motion.nav 
        className="relative px-6 md:px-0 bg-[#C7F0FD] rounded-full py-4 max-w-7xl mx-6 md:mx-auto lg:px-8 my-5 overflow-hidden"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated background particles */}
        {floatingParticles}
        
        {/* Subtle gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-transparent to-blue-50/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
        <div className="relative flex justify-between items-center z-10">
          {/* Navigation Menu */}
          <Naaavigation />
          
          {/* Search Bar */}
          <motion.div 
            className="hidden md:flex items-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <Search />
              </div>
              <motion.input
                type="text"
                placeholder="Search In here"
                className="md:w-[300px] pl-3 py-3 text-blue-500 border rounded-4xl bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </motion.div>

          {/* Mobile menu button */}
          <HeaderMobile />
        </div>
      </motion.nav>
    </motion.header>
  );
}
