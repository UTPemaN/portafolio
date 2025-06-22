'use client';

import { motion } from 'framer-motion';
import { FC } from 'react';

interface Skill {
  title: string;
  description: string;
  icon: string;
}

const skills: Skill[] = [
  {
    title: 'React & Next.js',
    description: 'Desarrollo de aplicaciones web modernas con React y Next.js',
    icon: '⚛️',
  },
  {
    title: 'TypeScript',
    description: 'Desarrollo robusto y tipado con TypeScript',
    icon: '📘',
  },
  {
    title: 'TailwindCSS',
    description: 'Diseño moderno y responsive con TailwindCSS',
    icon: '🎨',
  },
  {
    title: 'Stripe Integration',
    description: 'Implementación de pagos seguros con Stripe',
    icon: '💳',
  },
  {
    title: 'Framer Motion',
    description: 'Animaciones fluidas y profesionales',
    icon: '🎭',
  },
  {
    title: 'Full-Stack',
    description: 'Desarrollo completo de aplicaciones web',
    icon: '🚀',
  },
];

const SkillCard: FC<Skill> = ({ title, description, icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

const Skills: FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Mis Habilidades
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <SkillCard {...skill} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 