
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "Credit Card Fraud Detection System",
    description: "Real-time fraud detection web application using machine learning to identify fraudulent transactions with high accuracy. Implemented data preprocessing including feature scaling and PCA dimensionality reduction, trained classification models with scikit-learn, and deployed interactive Streamlit dashboard.",
    tags: ["Python", "Scikit-learn", "PCA", "Streamlit"],
    image: "/fraud-detection.png",
    links: {
      code: "https://github.com/prem-pur/credit-card-fraud-detection-system"
    }
  },
  {
    id: 2,
    title: "Smart Energy App: Household Power Consumption Forecasting",
    description: "Time-series forecasting solution to predict household electricity usage patterns using GRU-based deep learning model. Performed feature engineering on time-series datasets and created user-friendly Streamlit web interface for input visualization and forecast results.",
    tags: ["Python", "TensorFlow", "Time-Series", "Streamlit"],
    image: "/energy-app.png",
    links: {
      code: "https://github.com/prem-pur/Smart-Energy-App"
    }
  },
  {
    id: 3,
    title: "Plant Disease Detector",
    description: "Lightweight CNN for multi-class plant disease classification from leaf images. Integrated Grad-CAM for model interpretability and visual explanation of disease localization, enhancing trust in real-time AI applications for crop health monitoring.",
    tags: ["Python", "TensorFlow", "CNN", "Computer Vision"],
    image: "/plant-disease.png",
    links: {
      code: "https://github.com/prem-pur/plant-disease-detector"
    }
  },
  {
    id: 4,
    title: "Stock Price Predict System",
    description: "LSTM-based deep learning model for financial time-series forecasting of stock prices, integrating real-time data from Yahoo Finance API and technical indicators like moving averages and RSI. Developed interactive Streamlit dashboard for predictions and trend visualization.",
    tags: ["Python", "PyTorch", "LSTM", "Finance API"],
    image: "/stock-price.png",
    links: {
      code: "https://github.com/prem-pur/-Stock-Price-Prediction"
    }
  },
  {
    id: 5,
    title: "Weather Prediction Application",
    description: "CNN-based model for weather pattern classification and forecasting using image or time-series meteorological data. Built end-to-end pipeline with data preprocessing, model training, and Streamlit web app deployment for user-friendly real-time predictions.",
    tags: ["Python", "CNN", "TensorFlow", "Streamlit"],
    image: "/weather.png",
    links: {
      code: "https://github.com/prem-pur/WeatherPrediction"
    }
  },
  {
    id: 6,
    title: "BUILTSMART",
    description: "Java-based smart application demonstrating scalable automation and data handling for IoT-integrated systems. Showcases best practices in building robust, maintainable IoT solutions with emphasis on system design and automation workflows.",
    tags: ["Java", "IoT", "Automation", "System Design"],
    image: "/builtsmart.png",
    links: {
      code: "https://github.com/prem-pur/builtsmart"
    }
  },
];

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
    >
      <div className="relative w-full max-w-5xl bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8 mx-4 md:mx-0 overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl text-gray-600 dark:text-gray-300 hover:text-red-500"
        >
          <FiX />
        </button>

        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <img
            src={project.image}
            alt={project.title}
            className="w-full md:w-[60%] rounded-lg object-cover max-h-[500px]"
          />

          <div className="flex-1 space-y-4">
            <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">
              {project.title}
            </h3>
            <p className="text-md text-gray-600 dark:text-gray-300">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4 pt-2 flex-wrap">
              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:underline"
                >
                  <FiExternalLink /> Live Demo
                </a>
              )}
              {project.links?.code && (
                <a
                  href={project.links.code}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:underline"
                >
                  <FiGithub /> View Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <motion.section
      id="projects"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Machine learning and AI solutions I've built to solve real-world problems
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md 
             hover:shadow-2xl hover:scale-105 hover:border-blue-500 hover:border 
             transition transform duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Projects;
