import { motion } from "framer-motion";
import { FaPython, FaJava } from "react-icons/fa";
import { SiTensorflow, SiPytorch, SiScikitlearn, SiPandas, SiJupyter, SiMysql, SiSqlite, SiPostgresql, SiMongodb, SiGit, SiGithub, SiPostman, SiR, SiJavascript } from "react-icons/si";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: <FaPython />, color: "text-blue-500" },
      { name: "Java", icon: <FaJava />, color: "text-orange-600" },
      { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-500" },
      { name: "R", icon: <SiR />, color: "text-blue-600" },
    ]
  },
  {
    title: "ML/AI & Deep Learning",
    skills: [
      { name: "TensorFlow", icon: <SiTensorflow />, color: "text-orange-500" },
      { name: "PyTorch", icon: <SiPytorch />, color: "text-red-500" },
      { name: "Scikit-learn", icon: <SiScikitlearn />, color: "text-green-600" },
      { name: "Pandas", icon: <SiPandas />, color: "text-blue-700" },
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Jupyter", icon: <SiJupyter />, color: "text-orange-400" },
      { name: "Git", icon: <SiGit />, color: "text-orange-700" },
      { name: "Postman", icon: <SiPostman/>, color: "text-orange-500" },
      { name: "GitHub", icon: <SiGithub />, color: "text-gray-800 dark:text-white" },
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: <SiMysql/>, color: "text-red-600" },
      { name: "PostgreSQL", icon: <SiPostgresql/>, color: "text-blue-600" },
      { name: "MongoDB", icon: <SiMongodb/>, color: "text-green-600" },
      { name: "SQLite", icon: <SiSqlite/>, color: "text-blue-400" },
    ]
  }
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Tools and technologies I work with daily
          </p>
        </motion.div>

        {/* Skills by Category */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                    whileHover={{ x: 4 }}
                  >
                    <div className={`text-2xl ${skill.color}`}>
                      {skill.icon}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
};

export default Skills;
