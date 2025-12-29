import { motion } from 'framer-motion';
import { Target, Scale, Cpu, Globe, TrendingUp } from 'lucide-react';

const values = [
  { icon: Target, title: "Excelencia Consciente", desc: "Hacer las cosas bien, no por obligación, sino por identidad." },
  { icon: Scale, title: "Disciplina como Libertad", desc: "El orden crea el espacio para la verdadera creatividad." },
  { icon: Cpu, title: "Tecnología con Propósito", desc: "Herramientas que sirven al humano, no al revés." },
  { icon: Globe, title: "Crecimiento Integral", desc: "El éxito financiero sin salud mental es un fracaso." },
  { icon: TrendingUp, title: "Impacto Real", desc: "Resultados medibles que transforman vidas." },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Filosofía</h2>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 border border-white/5 bg-white/5 hover:border-gold/30 hover:bg-white/10 transition-all duration-300 text-center rounded-sm"
            >
              <div className="mb-6 flex justify-center">
                <div className="p-3 rounded-full bg-gold/10 group-hover:bg-gold/20 transition-colors">
                  <value.icon className="w-8 h-8 text-gold" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
