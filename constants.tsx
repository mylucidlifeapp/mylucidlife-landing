import React from 'react';

// Icons
export const Logo = ({ className }: { className?: string }) => (
  <div className={`flex items-center space-x-2 ${className}`}>
    <svg width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="text-primary dark:text-sky-400">
      <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="4" fill="none"/>
      <circle cx="50" cy="50" r="20" fill="currentColor"/>
    </svg>
    <span className="font-bold text-xl text-neutral-dark dark:text-neutral-light">My Lucid Life</span>
  </div>
);

export const SunIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
);

export const MoonIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
);

export const ClarityIcon = () => (
    <svg className="w-8 h-8 text-accent mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
);

export const IntentionIcon = () => (
    <svg className="w-8 h-8 text-accent mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
);

export const ProgressIcon = () => (
    <svg className="w-8 h-8 text-accent mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
);


// Page Content
export const HERO_CONTENT = {
    tagline: "Stop living by default. Start living by design.",
    subtitle: "A calm, focused space to clear the noise, find your own signal, and act with intention.",
    cta: "Begin Your Journey"
};

export const ABOUT_CONTENT = {
    p1: "Most apps fight for your attention. This one gives it back to you.",
    p2: "You don’t need another feed, another notification, or another voice telling you what matters. You need clarity. Real, usable clarity — the kind that makes decisions obvious, days simpler, and your life feel like yours again.",
    p3: "In a world of infinite information, attention is scarce. The people who thrive are not the ones who know the most, but the ones who can see the clearest. This app is your training ground for that skill."
};

export const DASHBOARD_CONTENT = {
    title: "Your Intention Dashboard",
    cards: [
        {
            icon: IntentionIcon,
            title: "Daily Intentions",
            description: "Set your top 3 priorities for the day. Everything else can wait.",
            value: "3 / 3",
        },
        {
            icon: ClarityIcon,
            title: "Focus Score",
            description: "A measure of your alignment with your stated intentions.",
            value: "87%",
        },
        {
            icon: ProgressIcon,
            title: "Progress Map",
            description: "Visualize your lucid moments over the past week.",
            value: "Chart",
        }
    ]
};

export const PROGRESS_DATA = [
    { name: 'Mon', value: 6 },
    { name: 'Tue', value: 8 },
    { name: 'Wed', value: 7 },
    { name: 'Thu', value: 9 },
    { name: 'Fri', value: 8 },
    { name: 'Sat', value: 10 },
    { name: 'Sun', value: 9 },
];


export const WHY_WE_EXIST = [
    { title: "Scarcity of Attention", description: "We’re drowning in content but starving for focus. My Lucid Life filters the noise so you can focus on what matters." },
    { title: "Scarcity of Intention", description: "Endless options, zero framework. We help you set priorities and act on them instead of reacting to everything else." },
    { title: "Scarcity of Authentic Connection", description: "Thousands of contacts, little real connection. Our tools nudge you toward quality over quantity — real conversations, meaningful moments." },
    { title: "Scarcity of Self-Knowledge", description: "The loudest voice in your life should be yours. We help you hear it again through guided reflection and micro-practices." },
];

export const HOW_IT_WORKS = [
    { title: "Clarity Sessions", description: "Short, guided exercises that cut through mental clutter. Think of them as focus sprints for your inner life." },
    { title: "Intention Dashboard", description: "Each morning you pick the three things that actually matter. Everything else waits. Watch the noise shrink and your progress grow." },
    { title: "Reflection & Tracking", description: "Simple, private prompts to check in with yourself. Over time you’ll see patterns: what energises you and what drains you." },
    { title: "Connection Nudges", description: "Instead of doomscrolling, get gentle cues to reach out to someone who matters or spend time offline." },
    { title: "Progress Map", description: "Visualise your 'lucid' moments over days and weeks — not as a gamified leaderboard, but as a quiet record of self-design." },
];

export const OUR_PROMISE = {
    intro: "We’re not here to hack your brain, harvest your data, or gamify your life. We’re here to help you:",
    points: [
        "See what matters.",
        "Do what matters.",
        "Feel ownership of your time and choices again."
    ]
};
