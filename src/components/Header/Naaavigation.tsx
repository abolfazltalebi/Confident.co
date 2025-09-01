import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { menuItem } from "../../constant/MenuItem";

export default function Naaavigation() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <motion.ul 
      className="hidden md:flex items-center space-x-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {menuItem.map((mItem, index) => (
        <motion.li 
          key={mItem.id}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to={mItem.src}
            className={`px-3 py-2 text-sm font-medium transition-colors ${
              isActive(mItem.src)
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-700 p-3 hover:text-blue-600 hover:bg-blue-50 rounded-2xl"
            }`}
          >
            {mItem.name}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
}
