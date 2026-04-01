import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-6 pt-20"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-950 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-100 dark:bg-indigo-950 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center">
        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <img
            src="/pamoda.jpeg"
            alt="Pamoda Umeshi"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto object-cover border-4 border-gray-400 dark:border-gray-600 shadow-lg"
          />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-semibold text-gray-900 dark:text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Pamoda Umeshi
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          AI/ML Engineer & Data Science Undergraduate
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Specialized in machine learning, computer vision, and time-series forecasting. Building intelligent solutions that solve real-world problems with production-ready deployments.
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="flex gap-6 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <a
            href="https://github.com/prem-pur"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition hover:scale-110"
            title="GitHub"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://linkedin.com/in/pamodaumeshi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition hover:scale-110"
            title="LinkedIn"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="mailto:omeshirathnayake@gmail.com"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition hover:scale-110"
            title="Email"
          >
            <MdEmail size={28} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
