import React from 'react'

const Footer = () => {
  return (
    <footer className="flex flex-col items-center py-4 mb-48 text-gray-600 text-sm">
      {/* Navigation Links */}
      <div className="flex flex-wrap space-x-4 mb-4">
        <a href="#" className="hover:underline">
          About
        </a>
        <span>|</span>
        <a href="#" className="hover:underline">
          Help
        </a>
        <span>|</span>
        <a href="#" className="hover:underline">
          Terms & Conditions
        </a>
        <span>|</span>
        <a href="#" className="hover:underline">
          Privacy
        </a>
        <span>|</span>
        <a href="#" className="hover:underline">
          Copyright Policy
        </a>
        <span>|</span>
        <a href="#" className="hover:underline">
          Contact Us
        </a>
      </div>
    </footer>
  );
}

export default Footer