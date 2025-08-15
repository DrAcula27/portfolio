'use client';

import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between px-24 py-6">
      <p className="text-sm order-2 md:order-1 text-center">
        © {new Date().getFullYear()} Danielle Andrews. All rights
        reserved.
      </p>
      <div className="flex items-center space-x-4 mb-4 md:mb-0 order-1 md:order-2">
        <a
          href="https://linkedin.com/in/daniellerandrews"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent-cool hover:scale-110 active:scale-95 transition-all"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent-cool hover:scale-110 active:scale-95 transition-all"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent-cool hover:scale-110 active:scale-95 transition-all"
        >
          <FaTwitter size={24} />
        </a>
      </div>
    </footer>
  );
}
