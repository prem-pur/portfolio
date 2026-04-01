
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 px-6">
      <div className="max-w-4xl mx-auto flex flex-col justify-center items-center">

        {/* Content */}
        <motion.div
          className="w-full text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            About Me
          </h2>
          <div className="space-y-6 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed">
              I'm an AI/ML Engineer and Data Science student at SLIIT, specializing in building intelligent solutions that solve real-world problems. With hands-on experience in machine learning, deep learning, computer vision, and time-series forecasting, I focus on creating production-ready AI applications that drive measurable impact.
            </p>
            <p className="text-lg leading-relaxed">
              My expertise spans TensorFlow, PyTorch, and Scikit-learn, with a track record of deploying end-to-end ML pipelines from data preprocessing to model deployment. I'm passionate about feature engineering, model optimization, and translating complex data challenges into actionable insights.
            </p>
            <p className="text-lg leading-relaxed">
              Beyond the code, I'm driven by continuous learning, exploring emerging AI technologies, and collaborating with teams to build scalable solutions. I believe in clean, maintainable code and applying best practices across all projects.
            </p>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default About;
