import { motion } from 'framer-motion';

export default function Purpose() {
  return (
    <section id="purpose" className="py-24 bg-[#0A0A0A] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-gold text-sm font-bold tracking-[0.2em] uppercase mb-8">Propósito</h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-white">
            "Creo que el mundo mejora cuando las personas viven con <span className="text-gold font-normal">claridad, disciplina y propósito</span>. Mi trabajo es diseñar sistemas —personales, tecnológicos y financieros— que permitan a las personas convertirse en su mejor versión y generar impacto real."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
