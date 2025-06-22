'use client';

import { motion } from 'framer-motion';
import { FC, useState } from 'react';

const ContactForm: FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Aquí iría la lógica de envío del formulario
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  return (
    <div className="bg-[#1a1a1a] p-8 rounded-2xl glow">
      <h2 className="text-2xl font-bold mb-2">¡Hablemos!</h2>
      <p className="text-gray-400 mb-6">
        Cuéntame sobre tu proyecto y veamos cómo puedo ayudarte
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Nombre"
            className="w-full bg-[#2a2a2a] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff66] transition-colors"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-[#2a2a2a] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff66] transition-colors"
          />
        </div>
        <div>
          <select className="w-full bg-[#2a2a2a] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff66] transition-colors">
            <option value="">Tipo de Proyecto</option>
            <option value="web">Desarrollo Web</option>
            <option value="app">Aplicación Móvil</option>
            <option value="ecommerce">E-commerce</option>
          </select>
        </div>
        <div>
          <textarea
            placeholder="Cuéntame sobre tu proyecto..."
            rows={4}
            className="w-full bg-[#2a2a2a] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff66] transition-colors"
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-[#00ff66] text-black font-semibold py-3 rounded-lg hover:bg-[#00cc52] transition-colors"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
        </motion.button>
      </form>
    </div>
  );
};

export default ContactForm; 