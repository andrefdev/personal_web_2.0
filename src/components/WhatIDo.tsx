import { motion } from 'framer-motion';

const areas = [
  {
    title: "Desarrollo Personal",
    desc: "Diseño de rutinas, hábitos y modelos mentales para optimizar el rendimiento humano y la claridad mental."
  },
  {
    title: "Tecnología",
    desc: "Creación de software y automatizaciones que eliminan tareas repetitivas y escalan operaciones complejas."
  },
  {
    title: "Finanzas",
    desc: "Estrategias de inversión y gestión de capital para construir libertad financiera sostenible a largo plazo."
  }
];

export default function WhatIDo() {
  return (
    <section className="py-24 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`px-4 ${index !== 0 ? 'pt-8 md:pt-0' : ''}`}
            >
              <h3 className="text-2xl font-bold text-white mb-4">{area.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                {area.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
