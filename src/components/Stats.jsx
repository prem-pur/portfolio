import { motion } from 'framer-motion'

const Stats = () => {
  const stats = [
    { value: 10, label: "Projects Completed" },
    { value: 100, label: "People Impacted", suffix: "%" },
    { value: 5, label: "Years Experience" },
    { value: 20, label: "Happy Clients" }
  ]

  return (
    <motion.section 
      className="stats-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="stats-container">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="stat-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h3 className="stat-value">
              {stat.value}
              {stat.suffix && <span>{stat.suffix}</span>}
            </h3>
            <p className="stat-label">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Stats