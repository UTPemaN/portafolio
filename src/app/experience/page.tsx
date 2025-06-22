'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Desarrollo Full Stack',
    description: 'Desarrollo de aplicaciones web completas utilizando tecnologías modernas como React, Next.js, Node.js y TypeScript. Implementación de autenticación segura con JWT y manejo de estados complejos.',
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'JWT'],
    icon: '🚀',
  },
  {
    title: 'Integración de Pagos',
    description: 'Implementación exitosa de múltiples pasarelas de pago incluyendo Stripe, Nequi y Bancolombia. Manejo seguro de transacciones y experiencia de usuario optimizada.',
    technologies: ['Stripe', 'Nequi', 'Bancolombia API', 'Seguridad en Pagos'],
    icon: '💳',
  },
  {
    title: 'Cloud & DevOps',
    description: 'Más de un año de experiencia en AWS, gestionando infraestructura en EC2, bases de datos en Aurora RDS y almacenamiento en S3. Implementación de prácticas DevOps para CI/CD.',
    technologies: ['AWS EC2', 'Aurora RDS', 'S3', 'DevOps'],
    icon: '☁️',
  },
  {
    title: 'Testing & QA',
    description: 'Testing de caja blanca en juegos, aplicaciones y sitios web. Experiencia con Postman para pruebas de API y aseguramiento de calidad en el desarrollo frontend y backend.',
    technologies: ['Testing', 'Postman', 'QA', 'Debugging'],
    icon: '🔍',
  },
  {
    title: 'Integración de IA',
    description: 'Desarrollo de proyectos que incorporan inteligencia artificial, mejorando la experiencia del usuario y automatizando procesos complejos.',
    technologies: ['IA', 'APIs de IA', 'Automatización'],
    icon: '🤖',
  },
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen pt-20 animated-background overflow-hidden">
      <div className="container mx-auto px-4 py-16 relative">
        {/* Rayos de fondo */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="ray"
            style={{
              left: `${20 * i}%`,
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Experiencia Profesional</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Más de 2 años de experiencia en desarrollo de software, con más de 15 proyectos exitosos implementados en producción.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#173540] p-6 md:p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{exp.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-[#84B026]">
                {exp.title}
              </h3>
              <p className="text-gray-300 mb-6 text-sm md:text-base">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#217373] rounded-full text-xs md:text-sm text-white whitespace-nowrap"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="/contact"
            className="inline-block bg-[#84B026] text-white px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-[#217373] transition-all duration-300 text-sm md:text-base"
          >
            ¿Interesado en trabajar juntos?
          </a>
        </motion.div>
      </div>
    </main>
  );
} 