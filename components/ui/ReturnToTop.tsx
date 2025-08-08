'use client';

import { FaChevronCircleUp } from 'react-icons/fa';

export default function ReturnToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 m-2 rounded-full hover:bg-secondary-300 focus:outline-none focus:ring-2 focus:ring-secondary-500 cursor-pointer"
      aria-label="Return to top"
      title="Return to top"
    >
      <FaChevronCircleUp size={36} />
    </button>
  );
}
