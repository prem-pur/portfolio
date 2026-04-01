import { motion } from 'framer-motion';
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState('#home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionOffsets = navItems.map(item => {
        const el = document.querySelector(item.href);
        return {
          href: item.href,
          offsetTop: el?.offsetTop || 0
        };
      });

      const current = sectionOffsets.reverse().find(section => scrollPosition >= section.offsetTop - 100);
      if (current) setActive(current.href);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/90 dark:bg-[#0f172a]/80 text-gray-900 dark:text-white border-b border-white/10 dark:border-gray-700 shadow"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`relative text-sm font-semibold transition duration-200
                ${active === item.href
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-900 dark:text-gray-200 hover:text-blue-600'}
              `}
            >
              {item.name}
              {/* Underline Animation */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-full bg-blue-600 transition-transform duration-300 ease-in-out
                ${active === item.href ? 'scale-x-100' : 'scale-x-0'}
                origin-left`}
              />
            </a>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className="text-xl text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className="text-xl text-gray-700 dark:text-gray-300"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-2xl text-gray-800 dark:text-gray-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur border-t border-white/10 dark:border-gray-700">
          <div className="flex flex-col gap-4 px-6 py-5">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => {
                  setActive(item.href);
                  setMobileMenuOpen(false);
                }}
                className={`text-base font-medium transition duration-200 ${
                  active === item.href
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-900 dark:text-gray-300 hover:text-blue-600'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
