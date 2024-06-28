import React, {useState, useEffect} from 'react'
import logo from './assets/images/byajbook_logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.navbar')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
     <nav className="navbar bg-white shadow-md sticky top-0 z-50">
      <div className="md:w-4/5 mx-auto px-4 py-2">
        <div className="flex justify-between py-2">
          <div className="flex-shrink-0 flex items-center">
            <img className="w-auto h-10 pr-3" src={logo} alt="Logo" />
          </div>
          <div className="hidden md:flex justify-end w-full items-center gap-4">
            <Link to="/" className="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md font-medium">Home</Link>
            <Link to="/about-us" className="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md font-medium">About us</Link>
            <Link to="/our-product" className="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md font-medium">Our product</Link>
            <Link to="/blog" className="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md font-medium">Blog</Link>
            <Link to="/investor-relations" className="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md font-medium">Investor Relations</Link>
            <Link to="/contact-us" className="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md font-medium">Contact us</Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-500 focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-50">
            <Link to="/" className="block text-gray-600 hover:text-blue-500 px-4 py-2">Home</Link>
            <Link to="/about-us" className="block text-gray-600 hover:text-blue-500 px-4 py-2">About us</Link>
            <Link to="/our-product" className="block text-gray-600 hover:text-blue-500 px-4 py-2">Our product</Link>
            <Link to="/blog" className="block text-gray-600 hover:text-blue-500 px-4 py-2">Blog</Link>
            <Link to="/investor-relations" className="block text-gray-600 hover:text-blue-500 px-4 py-2">Investor Relations</Link>
            <Link to="/contact-us" className="block text-gray-600 hover:text-blue-500 px-4 py-2">Contact us</Link>
          </div>
        )}
      </div>
    </nav>
    </div>
  )
}

export default Header
