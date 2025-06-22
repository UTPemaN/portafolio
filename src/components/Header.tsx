'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FC, useState, useEffect } from 'react';

const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { title: 'Quien Soy', href: '/about' },
    { title: 'Experiencia', href: '/experience' },
    { title: 'Habilidades', href: '/skills' },
    { title: 'Contáctame', href: '/contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#161F30]/80 backdrop-blur-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-xl font-bold text-[#84B026]"
              >
                EmanuellDev
              </motion.div>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <motion.span
                    whileHover={{ y: -2 }}
                    className="text-gray-300 hover:text-[#84B026] transition-colors"
                  >
                    {item.title}
                  </motion.span>
                </Link>
              ))}
            </nav>

            {/* Botón del menú móvil */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Menú móvil */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-[#161F30]/95 backdrop-blur-lg pt-20">
              <nav className="container mx-auto px-4 py-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-4"
                  >
                    <Link href={item.href}>
                      <motion.div
                        onClick={() => setIsMobileMenuOpen(false)}
                        whileTap={{ scale: 0.95 }}
                        className="block py-3 px-4 text-lg text-center text-gray-300 hover:text-[#84B026] transition-colors rounded-lg hover:bg-[#173540]"
                      >
                        {item.title}
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header; 