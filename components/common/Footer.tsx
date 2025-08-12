'use client';

import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between p-4">
      <p className="text-sm order-2 md:order-1">
        © {new Date().getFullYear()} Danielle Andrews. All rights
        reserved.
      </p>
      <div className="flex items-center space-x-4 mb-4 md:mb-0 order-1 md:order-2">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FaFacebook size={24} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FaTwitter size={24} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FaGithub size={24} />
        </a>
      </div>
    </footer>
  );
}
