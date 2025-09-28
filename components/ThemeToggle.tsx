import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { SunIcon, MoonIcon } from '../constants';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-2 rounded-full text-neutral-dark dark:text-neutral-light hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors"
    >
      {theme === 'light' ? (
        <MoonIcon className="w-6 h-6" />
      ) : (
        <SunIcon className="w-6 h-6 text-yellow-400" />
      )}
    </button>
  );
};

export default ThemeToggle;
