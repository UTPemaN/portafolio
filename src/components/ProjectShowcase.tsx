'use client';

import { motion } from 'framer-motion';
import { FC } from 'react';

interface Project {
  title: string;
  description: string;
  icon: string;
  color: string;
}

const projects: Project[] = [
  {
    title: 'React & Next.js',
    description: 'Desarrollo de aplicaciones web modernas con las últimas tecnologías de React y Next.js',
    icon: '⚛️',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'TypeScript',
    description: 'Código robusto y mantenible con TypeScript para aplicaciones escalables',
    icon: '📘',
    color: 'from-blue-600 to-blue-400',
  },
  {
    title: 'TailwindCSS',
    description: 'Diseños modernos y responsivos utilizando TailwindCSS',
    icon: '🎨',
    color: 'from-teal-500 to-emerald-500',
  },
  {
    title: 'Stripe Integration',
    description: 'Implementación segura de pagos con la API de Stripe',
    icon: '💳',
    color: 'from-purple-500 to-violet-500',
  },
  {
    title: 'Framer Motion',
    description: 'Animaciones fluidas y profesionales para una mejor experiencia de usuario',
    icon: '🎭',
    color: 'from-pink-500 to-rose-500',
  },
];

const ProjectCard: FC<Project> = ({ title, description, icon, color }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative p-6 bg-[#1a1a1a] rounded-2xl overflow-hidden group"
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
      <div className="relative z-10">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};

const ProjectShowcase: FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            ¡Pensamos Más Allá De La Pantalla!
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Resolvemos problemas con un enfoque estratégico personalizado que combina
            diseño hermoso, desarrollo robusto y colaboración a largo plazo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase; 