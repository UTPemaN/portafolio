'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const features = [
    {
      title: 'Frontend',
      description: 'Interfaces modernas y responsivas',
      icon: '🎨',
      link: '/skills',
    },
    {
      title: 'Backend',
      description: 'APIs robustas y escalables',
      icon: '⚙️',
      link: '/skills',
    },
    {
      title: 'Cloud',
      description: 'Soluciones en la nube',
      icon: '☁️',
      link: '/experience',
    },
    {
      title: 'Testing',
      description: 'Calidad y rendimiento',
      icon: '🔍',
      link: '/experience',
    },
  ];

  return (
    <main className="min-h-screen animated-background">
      {/* Rayos de fondo */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="ray"
          style={{
            left: `${12.5 * i}%`,
            animationDelay: `${i * 1.2}s`,
          }}
        />
      ))}

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 text-center lg:text-left"
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-[#84B026]">EmanuellDev</span>
                <br />
                Frontend & Backend
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Desarrollador Full Stack con experiencia en crear soluciones web modernas y escalables.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link href="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-[#84B026] text-white rounded-full font-semibold hover:bg-[#217373] transition-all duration-300"
                  >
                    Conóceme
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
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
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
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Especialidades</h2>
            <p className="text-xl text-gray-400">
              Soluciones completas para tus necesidades digitales
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link key={feature.title} href={feature.link}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-[#173540] p-8 rounded-2xl text-center cursor-pointer"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-[#84B026]">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#173540] rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para llevar tu proyecto al siguiente nivel?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Juntos podemos crear algo extraordinario
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#84B026] text-white rounded-full font-semibold hover:bg-[#217373] transition-all duration-300"
              >
                Empecemos a Trabajar
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
