'use client';

import { useState, useEffect } from 'react';
import { TiThMenu } from 'react-icons/ti';
import { IoCloseCircle } from 'react-icons/io5';
import Image from 'next/image';

const navigation = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // update active section based on scroll position
      const sections = [
        'hero',
        'about',
        'projects',
        'experience',
        'contact',
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-500/20 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollToSection('#hero')}>
            <Image
              src="/logo.png"
              alt="Logo"
              height={32}
              width={32}
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`transition-colors font-medium ${
                  activeSection === item.href.slice(1)
                    ? 'text-pink'
                    : 'hover:text-blue cursor-pointer'
                }`}
              >
                {item.name}
              </button>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink transition-colors border-l border-white pl-8"
              title="Resume opens in a new tab"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <IoCloseCircle size={24} />
            ) : (
              <TiThMenu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t bg-neutral-500">
            <div className="flex flex-col space-y-4 pt-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-center transition-colors ${
                    activeSection === item.href.slice(1)
                      ? 'text-pink'
                      : 'hover:text-blue cursor-pointer'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-t pt-4 text-center hover:text-pink transition-colors"
                title="Resume opens in a new tab"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
