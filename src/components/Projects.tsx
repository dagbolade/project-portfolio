import React from 'react';
import { Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';


const projects = [
  {
    title: 'IoT Inventory Management System',
    category: 'IoT & DevOps',
    company: 'Yunex Traffic',
    description: 'Real-time IoT device tracking with Kafka, CouchDB, and Fission. Integrated SNMP for device discovery and status monitoring.',
    tags: ['Kafka', 'CouchDB', 'Fission', 'SNMP'],
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    title: 'Automated Radiology Report Generation',
    category: 'AI & Healthcare',
    company: 'Solent University',
    description: 'AI-powered system for radiology reporting from chest X-rays. Achieved BLEU-1 Score: 0.2795, BLEU-4 Score: 0.0624.',
    tags: ['AWS ECS', 'Docker', 'AI', 'Healthcare'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    title: 'Solent Bot',
    category: 'AI & Chatbot',
    description: 'Conversational AI bot for Solent University admission queries with integrated text-to-speech functionality.',
    tags: ['NLP', 'Streamlit', 'Text-to-Speech', 'GPT'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    demo: 'https://solent-admission-bot.streamlit.app/'
  },
  {
    title: 'Predictive Model for EPL Outcomes',
    category: 'Sports Analytics',
    description: 'Football match prediction using CatBoost and XGBoost. Achieved 89% accuracy in predictions.',
    tags: ['CatBoost', 'XGBoost', 'Sports Analytics'],
    image: 'https://media.istockphoto.com/id/2164442944/photo/robot-arm-reaches-out-to-a-football-soccer-playing-with-machine-robot-arm-and-soccer-grass.jpg?s=1024x1024&w=is&k=20&c=-gnGiWJ57b_tU8oI2-w-fyz_o_p05K-kgVqTkc5O0sA=',
    demo: "https://footypredictor.up.railway.app/"
  },
  {
    title: 'Intelligent Coin Trading Platform',
    category: 'FinTech',
    description: 'Cryptocurrency price prediction using LSTM, XGBoost, and Prophet with integrated technical indicators.',
    tags: ['LSTM', 'XGBoost', 'Prophet', 'Streamlit'],
    image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    demo: 'https://coin-trading-platform.streamlit.app/'
  },
  {
    title: "Movie Recommendation System",
    category: "AI & Recommender Systems",
    description: "An advanced recommendation system that suggests movies based on user preferences using collaborative filtering and deep learning models.",
    tags: ["Recommender Systems", "NLP", "AI", "Flask"],
    image: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=2070&q=80",
    github: "https://github.com/dagbolade/movie-recommendation-system",
  },
  {
  title: "Yemisi Artistry",
  category: "Web Development & Booking System",
  description: "A professional website for a makeup artist featuring a responsive design with optimized text placement to showcase makeup work. The application includes a sophisticated booking system with dynamic time slots based on service type (longer slots for bridal services), an admin panel for managing bookings and availability, Supabase integration for database management, and automated email notifications via Netlify Functions.",
  longDescription: "The Yemisi Artistry project is a comprehensive web solution for a professional makeup artist business. Key features include:\n\n- **Dynamic booking system** with intelligent time slot allocation (1.5 hours for regular services, 2 hours for bridal services)\n- **Secure admin dashboard** for managing appointments, blocking dates, and viewing client information\n- **Responsive design** with optimized image and text placement to properly showcase makeup work\n- **Email integration** using Netlify Functions to send automated confirmations\n- **Calendar management** with date range selection for blocking vacation periods\n- **Supabase backend** for secure data storage and management\n- **Authentication system** to protect admin functionality\n- **Client management features** to track booking history and preferences",
  tags: ["React", "Supabase", "Tailwind CSS", "Netlify Functions", "Email Integration", "Booking System", "Admin Dashboard"],
  image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=2070&q=80",
  github: "https://github.com/dagbolade/Beauty_makeup_website",
  live: "https://artistrybyyemisi.netlify.app/",
  year: "2025",
  client: "Yemisi Artistry",
  role: "Full Stack Developer"
}
];

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>
      
      <div className="relative p-6">
        <div className="flex items-center mb-4">
          <Rocket className="h-6 w-6 text-indigo-600" />
          <div className="ml-4">
            <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
            <p className="text-sm text-indigo-600">{project.category}</p>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Display GitHub & Live Demo Buttons */}
        <div className="flex space-x-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              <FaGithub /> GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 transition"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Key Projects
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Showcasing innovation across AI, IoT, and software engineering
          </p>
        </motion.div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}