import React from 'react';
import { HERO_CONTENT } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white px-4 overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient animate-fade-in"></div>
      <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
      
      <div className="relative z-10 max-w-3xl mx-auto opacity-0 animate-slide-up [animation-delay:300ms]">
        <h1 className="text-4xl md:text-6xl font-bold !leading-tight tracking-tight mb-4">
          {HERO_CONTENT.tagline}
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          {HERO_CONTENT.subtitle}
        </p>
        <button className="bg-accent text-neutral-light font-bold py-3 px-8 rounded-2xl text-lg shadow-lg hover:bg-yellow-500 transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-accent/50">
          {HERO_CONTENT.cta}
        </button>
      </div>
    </section>
  );
};

export default Hero;
