'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface ContactInfo {
  linkedin: string;
  email: string;
  phone: string;
}

export default function ContactPage() {
  const [unlockedInfo, setUnlockedInfo] = useState<Partial<ContactInfo>>({});

  const contactInfo = {
    linkedin: 'https://www.linkedin.com/in/emanuel-munoz-lópez-418115254/',
    email: 'munozemanuel701@gmail.com',
    phone: '3215727744',
  };

  const handleUnlock = (type: keyof ContactInfo) => {
    setUnlockedInfo((prev) => ({ ...prev, [type]: contactInfo[type] }));
  };

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Contáctame</h1>
          <p className="text-xl text-gray-400">
            Para tu proyecto o si te interesa que trabaje en tu empresa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* LinkedIn */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#173540] p-8 rounded-2xl text-center relative overflow-hidden group"
          >
            <motion.button
              onClick={() => handleUnlock('linkedin')}
              className="w-full h-full flex flex-col items-center"
            >
              <motion.div
                animate={unlockedInfo.linkedin ? { scale: [1, 1.2, 0] } : {}}
                className="text-4xl mb-4"
              >
                {unlockedInfo.linkedin ? '🔓' : '🔒'}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              {unlockedInfo.linkedin ? (
                <a
                  href={unlockedInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#84B026] hover:underline break-all"
                >
                  Ver Perfil
                </a>
              ) : (
                <p className="text-gray-400">Click para desbloquear</p>
              )}
            </motion.button>
          </motion.div>

          {/* Email */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#173540] p-8 rounded-2xl text-center relative overflow-hidden group"
          >
            <motion.button
              onClick={() => handleUnlock('email')}
              className="w-full h-full flex flex-col items-center"
            >
              <motion.div
                animate={unlockedInfo.email ? { scale: [1, 1.2, 0] } : {}}
                className="text-4xl mb-4"
              >
                {unlockedInfo.email ? '🔓' : '🔒'}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              {unlockedInfo.email ? (
                <a
                  href={`mailto:${unlockedInfo.email}`}
                  className="text-[#84B026] hover:underline break-all"
                >
                  {unlockedInfo.email}
                </a>
              ) : (
                <p className="text-gray-400">Click para desbloquear</p>
              )}
            </motion.button>
          </motion.div>

          {/* Teléfono */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#173540] p-8 rounded-2xl text-center relative overflow-hidden group"
          >
            <motion.button
              onClick={() => handleUnlock('phone')}
              className="w-full h-full flex flex-col items-center"
            >
              <motion.div
                animate={unlockedInfo.phone ? { scale: [1, 1.2, 0] } : {}}
                className="text-4xl mb-4"
              >
                {unlockedInfo.phone ? '🔓' : '🔒'}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">Teléfono</h3>
              {unlockedInfo.phone ? (
                <a
                  href={`tel:${unlockedInfo.phone}`}
                  className="text-[#84B026] hover:underline"
                >
                  {unlockedInfo.phone}
                </a>
              ) : (
                <p className="text-gray-400">Click para desbloquear</p>
              )}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 