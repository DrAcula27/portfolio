'use client';

import { useDarkMode } from '@/hooks/useDarkMode';
import { LuMoon, LuSun, LuMonitor } from 'react-icons/lu';

export default function DarkModeToggle() {
  const { theme, toggleTheme, mounted } = useDarkMode();

  // prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg bg-neutral-100 animate-pulse" />
    );
  }

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <LuSun className="w-5 h-5" />;
      case 'dark':
        return <LuMoon className="w-5 h-5" />;
      case 'system':
        return <LuMonitor className="w-5 h-5" />;
      default:
        return <LuSun className="w-5 h-5" />;
    }
  };

  const getLabel = () => {
    switch (theme) {
      case 'light':
        return 'Switch to dark mode';
      case 'dark':
        return 'Switch to system preference';
      case 'system':
        return 'Switch to light mode';
      default:
        return 'Toggle theme';
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-10 h-10 rounded-full cursor-pointer
                 transition-all duration-200 ease-in-out
                 focus:outline-none focus:ring-2 focus:ring-purple focus:ring-offset-1
                 hover:text-purple"
      aria-label={getLabel()}
      title={getLabel()}
    >
      <span className="sr-only">{getLabel()}</span>
      <div className="transition-transform duration-200 ease-in-out">
        {getIcon()}
      </div>
    </button>
  );
}
