import React from 'react';
import { Logo } from '../constants';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 animate-fade-in">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between backdrop-blur-sm bg-neutral-light/70 dark:bg-dark-bg/70 rounded-b-2xl px-6 shadow-sm">
          <Logo />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
