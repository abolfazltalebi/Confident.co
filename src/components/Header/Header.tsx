import { Link, useLocation } from "react-router-dom";
import Logo from "../icons/Logo";
import Search from "../icons/Search";

export default function Header() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };
  const menuItem = [
    { id: 1, name: "home", src: "/" },
    { id: 2, name: "about us", src: "/about" },
    { id: 3, name: "services", src: "/services" },
    { id: 4, name: "pages", src: "/pages" },
    { id: 5, name: "blog", src: "/blog" },
    { id: 6, name: "contact", src: "/contaact" },
  ];
  return (
    <header className="">
      {/* Top Section - Contact Info & Appointment Button */}
      <div className="  px-6 md:px-0 py-3 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <Logo />
            </Link>
          </div>
          <div className="flex gap-3 items-center">
            {/* Contact Information */}
            <div className="hidden md:flex items-center space-x-6 text-sm text-gray-700">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>St. Sanguin Number 40</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+1234 - 4567 - 890</span>
              </div>
            </div>

            {/* Appointment Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold text-sm transition-colors duration-200 shadow-md ">
              APPOINTMENT
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="px-6 md:px-0 bg-[#C7F0FD] rounded-full py-4 max-w-7xl mx-  mx-6 md:mx-auto lg:px-8 my-5">
        <div className="flex justify-between items-center">
          {/* Navigation Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            {menuItem.map((mItem) => {
              return (
                <li key={mItem.id}>
                  <Link
                    to="/"
                    className={`‍px-3 py-2  text-sm font-medium transition-colors ${
                      isActive(`${mItem.src}`)
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-700 p-3 hover:text-blue-600 hover:bg-blue-50 rounded-2xl"
                    }`}
                  >
                    ‍{mItem.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Search Bar */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
               <Search/>
              </div>
              <input
                type="text"
                placeholder="Search In here"
                className="md:w-[300px] pl-3 py-3 text-blue-500 border rounded-4xl bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600">
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
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
