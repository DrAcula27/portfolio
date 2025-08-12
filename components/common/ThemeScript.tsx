'use client';

const ThemeScript = () => {
  const script = `
    (function() {
      function getInitialTheme() {
        try {
          const savedTheme = localStorage.getItem('theme');
          if (savedTheme) {
            return savedTheme;
          }
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          return prefersDark ? 'dark' : 'light';
        } catch (e) {
          // localStorage is not available
          return 'light';
        }
      }
      const theme = getInitialTheme();
      if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
};

export default ThemeScript;
