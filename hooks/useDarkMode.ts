'use client';

import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'system';

export function useDarkMode() {
  const [theme, setTheme] = useState<Theme>('system');
  const [mounted, setMounted] = useState(false);

  // handle hydration
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // apply theme changes
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;

    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
    } else {
      // system preference
      root.removeAttribute('data-theme');
    }

    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  // get current effective theme for ui display
  const getEffectiveTheme = (): 'light' | 'dark' => {
    if (!mounted) return 'light';

    if (theme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    }
    return theme as 'light' | 'dark';
  };

  return {
    theme,
    toggleTheme,
    effectiveTheme: getEffectiveTheme(),
    mounted,
  };
}
