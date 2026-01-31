import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand */}
          <div
            className="flex-shrink-0 text-3xl font-regular text-[#6AC9CB]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            ZOLTON DESIGN
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-8">
          <a
  href="/"
  className="text-gray-700 hover:text-[#6AC9CB] transition"
>
  HOME
</a>

            <a
              href="https://zoltondesign.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#6AC9CB] transition"
            >
              PORTFOLIO
            </a>
            <a
              href="/Zolton_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#6AC9CB] transition"
            >
              RESUME
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
