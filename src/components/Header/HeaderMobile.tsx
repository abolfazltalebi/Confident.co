import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { menuItem } from "../../constant/MenuItem";
import { createPortal } from "react-dom";
import Logo from "../icons/Logo";

export default function HeaderMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.div
        className="md:hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <motion.button
          aria-label="Open menu"
          className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
          onClick={() => setIsOpen(true)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </motion.button>
      </motion.div>

      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/50 z-[9998]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />

              <motion.aside
                className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-[9999] shadow-xl p-6"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="flex items-center justify-between mb-6">
              <Logo/>
                  <button
                    aria-label="Close menu"
                    className="p-2 rounded-full hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <nav>
                  <ul className="space-y-2">
                    {menuItem.map((item) => (
                      <li key={item.id}>
                        <Link
                          to={item.src}
                          className="block px-4 py-3 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </motion.aside>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
