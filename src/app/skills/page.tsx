'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Framer Motion', level: 80 },
    ],
    icon: '🎨',
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'JWT', level: 85 },
      { name: 'REST APIs', level: 90 },
      { name: 'MongoDB', level: 80 },
    ],
    icon: '⚙️',
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS EC2', level: 75 },
      { name: 'Aurora RDS', level: 70 },
      { name: 'S3', level: 80 },
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 70 },
    ],
    icon: '☁️',
  },
  {
    title: 'Otros',
    skills: [
      { name: 'Testing', level: 80 },
      { name: 'Postman', level: 85 },
      { name: 'Inglés B1', level: 75 },
      { name: 'Stripe', level: 80 },
      { name: 'UI/UX', level: 75 },
    ],
    icon: '🛠️',
  },
];

export default function SkillsPage() {
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
          <h1 className="text-4xl font-bold mb-4">Habilidades Técnicas</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Un conjunto diverso de habilidades técnicas respaldadas por experiencia práctica en proyectos reales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-[#173540] p-8 rounded-2xl"
            >
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">{category.icon}</span>
                <h2 className="text-2xl font-bold text-[#84B026]">
                  {category.title}
                </h2>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-[#84B026]">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-[#161F30] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          duration: 1,
                        }}
                        className="h-full bg-[#217373] rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a
            href="/contact"
            className="inline-block bg-[#84B026] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#217373] transition-all duration-300"
          >
            ¿Quieres saber más?
          </a>
        </motion.div>
      </div>
    </main>
  );
} 