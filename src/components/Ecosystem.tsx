import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "The Prime Way",
    category: "Productividad & Disciplina",
    desc: "El sistema definitivo de organización personal. Metodología probada para recuperar el control de tu tiempo.",
    color: "border-yellow-500/50 hover:shadow-yellow-500/20",
    textCol: "text-yellow-500",
    link: "https://hotmart.com/en/marketplace/products/the-ultimate-organization-system/A96606771T"
  },
  {
    title: "Indrox",
    category: "Software & Automatización",
    desc: "Soluciones tecnológicas corporativas. Desarrollamos el software que las empresas modernas necesitan para escalar.",
    color: "border-purple-500/50 hover:shadow-purple-500/20",
    textCol: "text-purple-500",
    link: "#"
  },
  {
    title: "Finnoba",
    category: "Finanzas",
    desc: "Educación y gestión financiera inteligente. Democratizando el acceso a estrategias de inversión institucionales.",
    color: "border-blue-500/50 hover:shadow-blue-500/20",
    textCol: "text-blue-500",
    link: "#"
  }
];

export default function Ecosystem() {
  return (
    <section id="projects" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-gold text-sm font-bold tracking-[0.2em] uppercase mb-4">Ecosistema</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Proyectos Activos</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`block p-8 bg-[#111] border ${project.color} transition-all duration-300 group hover:-translate-y-2`}
            >
              <div className="flex justify-between items-start mb-6">
                <span className={`text-xs font-bold tracking-wider uppercase ${project.textCol}`}>
                  {project.category}
                </span>
                <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-gold transition-colors">
                {project.title}
              </h4>
              <p className="text-gray-400 font-light leading-relaxed">
                {project.desc}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
