'use client';

import { motion } from 'framer-motion';
import { FC } from 'react';

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Diseño',
    description: 'Desde wireframes hasta mockups de alta fidelidad, diseñamos interfaces intuitivas que se ven tan bien como funcionan.',
  },
  {
    number: '02',
    title: 'Desarrollo',
    description: 'Nuestro equipo de desarrollo convierte los diseños en aplicaciones web robustas y escalables.',
  },
  {
    number: '03',
    title: 'Testing',
    description: 'Realizamos pruebas exhaustivas para garantizar que todo funcione perfectamente en cada dispositivo.',
  },
  {
    number: '04',
    title: 'Lanzamiento',
    description: 'Implementamos tu aplicación y proporcionamos soporte continuo para actualizaciones y mejoras.',
  },
];

const ProcessSteps: FC = () => {
  return (
    <section className="py-20 bg-[#0f0f0f]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Nuestro Proceso: ¡Diseñado Para Entregar!
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-6 bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a]"
            >
              <div className="text-[#00ff66] text-xl font-bold mb-4">
                {step.number}.
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[#00ff66] text-black font-semibold rounded-full hover:bg-[#00cc52] transition-all duration-300"
          >
            ¡Programa una Llamada!
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps; 