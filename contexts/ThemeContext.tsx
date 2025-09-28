import React, { createContext, useState, useEffect, useContext, useMemo } from 'react';
import { Theme, ThemeContextType } from '../types';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const root = window.document.documentElement;
    const initialTheme = localStorage.getItem('theme') as Theme | null;
    
    if (initialTheme) {
        setTheme(initialTheme);
        if(initialTheme === 'dark') {
            root.classList.add('dark');
        }
    } else {
        const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const newTheme = isSystemDark ? 'dark' : 'light';
        setTheme(newTheme);
        if (newTheme === 'dark') {
            root.classList.add('dark');
        }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    const root = window.document.documentElement;
    root.classList.toggle('dark', newTheme === 'dark');
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
