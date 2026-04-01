import { motion } from 'framer-motion';

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const education = {
    degree: 'BSc (Hons) in Information Technology – Data Science',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    graduation: 'Expected June 2027',
    coursework: [
      'Machine Learning',
      'Deep Learning',
      'Artificial Intelligence',
      'Computer Vision',
      'Data Mining',
      'Software Engineering',
      'Database Systems',
      'Data Structures and Algorithms',
      'Data Visualization'
    ]
  };

  const certifications = [
    {
      title: 'AI/ML Engineer - Stage 1',
      issuer: 'Sri Lanka Institute of Information Technology',
      skills: ['Machine Learning', 'Artificial Intelligence', 'Python', 'Pandas', 'NumPy', 'Data Modeling', 'Kaggle']
    },
    {
      title: 'Postman API Fundamentals Student Expert',
      issuer: 'Postman',
      skills: ['Postman', 'REST APIs', 'API Testing']
    },
    {
      title: 'Data Visualization',
      issuer: 'Kaggle',
      skills: ['Data Visualization', 'Matplotlib', 'Data Analysis', 'EDA']
    },
    {
      title: 'Introduction to Programming – Python',
      issuer: 'University of Moratuwa',
      skills: ['Python']
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-white dark:bg-[#0f172a]">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Building expertise through formal education and specialized certifications, Technical Skills
          </p>
        </motion.div>

        {/* Degree Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* University Degree */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-8 border border-blue-200 dark:border-blue-800 shadow-lg">
            <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {education.degree}
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                  {education.institution}
                </p>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-6">
                  {education.graduation}
                </p>
                
                {/* Relevant Coursework */}
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Relevant Coursework:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {education.coursework.map((course, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-900 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
            </div>
          </motion.div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Professional Certifications
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {cert.issuer}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, sidx) => (
                      <span
                        key={sidx}
                        className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
