import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';

export default function Hero() {
  const titleSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 200,
  });

  const subtitleSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 400,
  });

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <animated.div style={titleSpring}>
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              David Agbolade
            </h1>
            <p className="mt-4 text-2xl sm:text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 font-bold">
              AI & Software Engineer
            </p>
          </animated.div>

          <animated.div style={subtitleSpring}>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Crafting intelligent solutions at the intersection of AI, IoT, and cloud computing.
              AWS Certified with expertise in DevOps and predictive modeling.
            </p>

            <div className="mt-10 flex justify-center space-x-8">
              {[
                { icon: Github, href: "https://github.com/dagbolade", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/dagbolade", label: "LinkedIn" },
                { icon: Mail, href: "mailto:dagbolade72@gmail.com", label: "Email" },
                { icon: Phone, href: "tel:+447414283865", label: "Phone" }
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-200" />
                  <div className="relative bg-black rounded-lg p-2">
                    <Icon size={32} className="text-white group-hover:text-pink-400 transition-colors" />
                  </div>
                  <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    {label}
                  </span>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-16"
            >
              <a
                href="#about"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transform hover:scale-105 transition-all"
              >
                Explore My Work
              </a>
            </motion.div>
          </animated.div>
        </div>
      </div>
    </div>
  );
}