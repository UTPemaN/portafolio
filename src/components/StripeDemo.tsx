'use client';

import { loadStripe } from '@stripe/stripe-js';
import { motion } from 'framer-motion';
import { FC, useState } from 'react';

const StripeDemo: FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDemoClick = async () => {
    setIsLoading(true);
    // Aquí normalmente iría la lógica de pago con Stripe
    setTimeout(() => {
      setIsLoading(false);
      alert('Esta es una demostración de la integración con Stripe');
    }, 1000);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Integración con Stripe</h2>
            <p className="text-lg mb-8 opacity-90">
              Implementación segura de pagos utilizando la API de Stripe
            </p>
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
              <div className="mb-8">
                <span className="text-4xl font-bold">$19.99</span>
                <span className="text-xl ml-2">USD</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  px-8 py-3 rounded-full bg-white text-purple-600 font-semibold
                  hover:bg-opacity-90 transition-all duration-300
                  ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}
                `}
                onClick={handleDemoClick}
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Procesando...
                  </span>
                ) : (
                  'Probar Demo de Pago'
                )}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StripeDemo; 