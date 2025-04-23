import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinkClass = ({ isActive }) => 
    isActive 
      ? "relative block px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1" 
      : "relative block px-4 py-2 rounded-lg text-gray-600 font-medium hover:bg-gray-100 transition-all duration-200";

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo & Brand */}
          <div className="flex items-center">
            <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Nguyễn Văn Minh - 22003405
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <NavLink to="/counter_app" className={navLinkClass}>
              Counter App
            </NavLink>
            <NavLink to="/to_do_list" className={navLinkClass}>
              To Do List
            </NavLink>
            <NavLink to="/toggle_theme" className={navLinkClass}>
              Toggle Theme
            </NavLink>
            <NavLink to="/shopping_cart" className={navLinkClass}>
              Shopping Cart
            </NavLink>
            <NavLink to="/login" className={navLinkClass}>
              Login
            </NavLink>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-3 pb-5 space-y-2">
            <NavLink 
              to="/counter_app" 
              className={navLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              Counter App
            </NavLink>
            <NavLink 
              to="/to_do_list" 
              className={navLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              To Do List
            </NavLink>
            <NavLink 
              to="/toggle_theme" 
              className={navLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              Toggle Theme
            </NavLink>
            <NavLink 
              to="/shopping_cart" 
              className={navLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              Shopping Cart
            </NavLink>
            <NavLink 
              to="/login" 
              className={navLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
}
