import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { DASHBOARD_CONTENT, PROGRESS_DATA } from '../constants';

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-lg bg-white/80 dark:bg-dark-card/80 p-2 shadow-lg backdrop-blur-sm">
          <p className="label text-sm text-neutral-dark dark:text-neutral-light">{`${label} : ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
};

const Dashboard: React.FC = () => {
    return (
        <section className="w-full max-w-6xl mx-auto py-16 px-6 md:px-8 opacity-0 animate-slide-up [animation-delay:300ms]">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-dark dark:text-neutral-light mb-12">{DASHBOARD_CONTENT.title}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {DASHBOARD_CONTENT.cards.map((card, index) => {
                    const CardIcon = card.icon;
                    return (
                        <div key={index} className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
                           <CardIcon />
                           <h3 className="text-xl font-semibold text-neutral-dark dark:text-neutral-light mb-2">{card.title}</h3>
                           <p className="text-neutral-dark dark:text-gray-400 mb-4 flex-grow">{card.description}</p>
                           {card.value !== 'Chart' ? (
                               <p className="text-4xl font-bold text-primary dark:text-sky-400 mt-auto">{card.value}</p>
                           ) : (
                               <div className="h-40 w-full mt-auto">
                                   <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={PROGRESS_DATA} margin={{ top: 20, right: 10, left: -20, bottom: 5 }}>
                                            <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: '#6D6D6D' }} className="text-xs" />
                                            <YAxis hide={true} />
                                            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(137, 207, 240, 0.2)' }} />
                                            <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                                                {PROGRESS_DATA.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={'#89CFF0'} />
                                                ))}
                                            </Bar>
                                        </BarChart>
                                   </ResponsiveContainer>
                               </div>
                           )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Dashboard;