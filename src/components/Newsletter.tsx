import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-24 bg-[#0A0A0A] border-t border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block p-3 rounded-full bg-gold/10 mb-6">
            <Mail className="w-6 h-6 text-gold" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Crecimiento Semanal
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Recibe ideas sobre disciplina, sistemas y crecimiento cada semana. <br />
            Sin spam, solo valor condensado.
          </p>

          {/* 
            PLACEHOLDER FOR NEWSLETTER EMBED
            Instructions for user:
            1. Remove the <form> block below.
            2. Paste your Beehiiv / ConvertKit / Mailchimp embed code here.
            3. Ensure the container style matches the width.
          */}
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="tu@email.com" 
                className="flex-1 px-5 py-3 bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors w-full"
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-gold text-black font-bold uppercase tracking-wide hover:bg-white transition-colors duration-300 whitespace-nowrap"
              >
                Suscribirse
              </button>
            </form>
            <p className="mt-4 text-xs text-gray-600">
              Únete a +2,500 suscriptores. Darse de baja en cualquier momento.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
