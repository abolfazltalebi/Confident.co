import { motion } from "motion/react";
import Search from "../icons/Search";

export default function HeaaderSearchBar() {
  return (
    <motion.div 
      className="hidden md:flex items-center"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <Search />
        </div>
        <motion.input
          type="text"
          placeholder="Search In here"
          className="md:w-[300px] pl-3 py-3 text-blue-500 border rounded-4xl bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          whileFocus={{ 
            scale: 1.02,
            boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)"
          }}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        />
      </div>
    </motion.div>
  );
}
