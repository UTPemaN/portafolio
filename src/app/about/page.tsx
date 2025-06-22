'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20 animated-background">
      <div className="container mx-auto px-4 py-16">
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

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-[#84B026]">EmanuellDev</span>
              <br />
              Emanuel Muñoz Lopez
            </h1>
            
            <div className="space-y-6 text-gray-300">
              <p className="text-xl mb-6">
                Estudiante de Ingeniería en Sistemas y Computación de 10mo semestre en la Universidad Tecnológica de Pereira
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-[#173540] p-6 rounded-2xl mb-6"
              >
                <h2 className="text-[#84B026] text-xl font-semibold mb-4">
                  Sobre mí
                </h2>
                <div className="space-y-4">
                  <p>
                    Mi fortaleza es la comunicación clara y precisa, y siempre estoy listo para entregar el mejor producto. Mi especialidad es el desarrollo backend y frontend.
                  </p>
                  <p>
                    Te brindaré el mejor y más profesional servicio en tecnologías como Javascript, Typescript, Tailwind CSS con Node, React, AWS, Nest y Next. Trabajo con mockups personalizados en Figma si es necesario y requerido.
                  </p>
                  <p>
                    Cuento con más de 2 años de experiencia en múltiples proyectos implementados en producción.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <Link href="/experience">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-[#84B026] text-white rounded-full font-semibold hover:bg-[#217373] transition-all duration-300"
                  >
                    Ver Experiencia
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 border-2 border-[#84B026] text-[#84B026] rounded-full font-semibold hover:bg-[#84B026] hover:text-white transition-all duration-300"
                  >
                    Contáctame
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <Image
                src="/foto.jpg"
                alt="Emanuel Muñoz Lopez"
                fill
                className="rounded-2xl object-cover"
                priority
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#161F30] via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 