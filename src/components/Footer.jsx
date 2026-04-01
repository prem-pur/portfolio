import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* About */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Pamoda Umeshi</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              AI/ML Engineer specializing in machine learning, computer vision, and data science solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition">Home</a>
              <a href="#projects" className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 transition">Projects</a>
              <a href="#skills" className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 transition">Skills</a>
              <a href="#contact" className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 transition">Contact</a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Connect</h4>
            <div className="flex gap-4 text-lg">
              <a 
                href="https://github.com/prem-pur" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition hover:scale-110"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/pamodaumeshi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition hover:scale-110"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="mailto:omeshirathnayake@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition hover:scale-110"
                title="Email"
              >
                <MdEmail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Pamoda Umeshi. Designed & built with care.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
