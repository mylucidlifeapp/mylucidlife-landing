import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import { ABOUT_CONTENT, WHY_WE_EXIST, HOW_IT_WORKS, OUR_PROMISE, ClarityIcon, IntentionIcon, ProgressIcon } from './constants';

// A reusable Section component for consistent styling and animation
const Section: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className = '' }) => (
    <section className={`w-full max-w-4xl mx-auto py-16 px-6 md:px-8 opacity-0 animate-slide-up ${className}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-dark dark:text-neutral-light mb-12">{title}</h2>
        {children}
    </section>
);

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen font-sans text-neutral-dark dark:text-gray-300">
        <Header />
        <main>
          <Hero />
          
          <div className="bg-neutral-light dark:bg-dark-bg">
            <Section title="About My Lucid Life" className="[animation-delay:200ms]">
                <div className="text-center max-w-3xl mx-auto space-y-6">
                    <p className="text-lg md:text-xl text-neutral-dark dark:text-gray-300">{ABOUT_CONTENT.p1}</p>
                    <p className="text-lg md:text-xl text-neutral-dark dark:text-gray-300">{ABOUT_CONTENT.p2}</p>
                    <p className="text-lg md:text-xl font-semibold text-neutral-dark dark:text-neutral-light">{ABOUT_CONTENT.p3}</p>
                </div>
            </Section>

            <Dashboard />

            <Section title="Why We Exist" className="[animation-delay:400ms]">
                <div className="grid md:grid-cols-2 gap-8">
                    {WHY_WE_EXIST.map((item, index) => (
                        <div key={index} className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-xl font-semibold text-neutral-dark dark:text-neutral-light mb-3">{item.title}</h3>
                            <p className="text-neutral-dark dark:text-gray-400">{item.description}</p>
                        </div>
                    ))}
                </div>
            </Section>

            <Section title="How The App Works" className="[animation-delay:600ms]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {HOW_IT_WORKS.map((item, index) => (
                        <div key={index} className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-primary/20 dark:bg-primary/10 text-primary dark:text-sky-300 flex items-center justify-center rounded-full font-bold text-xl">{index + 1}</div>
                            <div>
                                <h3 className="text-lg font-semibold text-neutral-dark dark:text-neutral-light mb-1">{item.title}</h3>
                                <p className="text-neutral-dark dark:text-gray-400">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

             <Section title="Our Promise" className="[animation-delay:800ms]">
                <div className="bg-white dark:bg-dark-card p-10 rounded-2xl shadow-lg max-w-3xl mx-auto">
                    <p className="text-center text-lg md:text-xl mb-8 text-neutral-dark dark:text-gray-300">{OUR_PROMISE.intro}</p>
                    <ul className="space-y-4">
                       {OUR_PROMISE.points.map((point, index) => (
                         <li key={index} className="flex items-center text-lg">
                           <svg className="w-6 h-6 text-accent mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                           {point}
                         </li>
                       ))}
                    </ul>
                </div>
            </Section>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
