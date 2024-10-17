import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-semibold text-gray-800">Pretoria Student Accommodation</div>
          <nav className="flex space-x-8">
            <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
              Users
            </a>
            <a href="/properties" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
              Properties
            </a>
            <a href="/applications" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
              Applications
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
