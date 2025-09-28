import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-light dark:bg-dark-bg border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-neutral-dark dark:text-gray-500">
          &copy; {new Date().getFullYear()} My Lucid Life. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
