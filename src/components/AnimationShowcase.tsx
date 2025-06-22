'use client';

import { motion, useAnimation } from 'framer-motion';
import { FC, useEffect } from 'react';

const AnimationShowcase: FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
      borderRadius: ["20%", "50%", "20%"],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 1
      }
    });
  }, [controls]);

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800 overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Animaciones Avanzadas</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Ejemplos de animaciones fluidas con Framer Motion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Hover Animation */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold mb-4">Hover Effect</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Pasa el mouse por encima para ver la animación
            </p>
          </motion.div>

          {/* Card 2 - Continuous Animation */}
          <div className="flex items-center justify-center">
            <motion.div
              animate={controls}
              className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500"
            />
          </div>

          {/* Card 3 - Scroll Animation */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold mb-4">Scroll Reveal</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Esta tarjeta se anima al hacer scroll
            </p>
          </motion.div>
        </div>

        {/* Interactive Animation Demo */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold"
            >
              ¡Interactúa conmigo!
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimationShowcase; 