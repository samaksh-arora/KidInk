import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {
  const navigate = useNavigate()
  
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  }

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  }

  return (
    <motion.div 
      className="home"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            COMMUNITY<br />COLLEGE
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            The new age of nightlife. Where curiosity meets community and learning becomes an experience.
          </motion.p>
          <motion.button 
            className="hero-cta"
            onClick={() => navigate('/events')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Events →
          </motion.button>
        </div>
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="mouse-icon"></div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Redefining How We <em>Connect</em>
        </motion.h2>
        <motion.p 
          className="section-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          In an era where people crave meaningful connections over another night at the bar, 
          Community College offers a new kind of social experience. Join us for thought-provoking 
          lectures, intimate discussions, and a community that values growth.
        </motion.p>

        <motion.div 
          className="features-grid"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div className="feature-card" variants={itemVariants}>
            <div className="feature-icon">👥</div>
            <h3>Community First</h3>
            <p>Connect with like-minded individuals who value growth and meaningful conversations</p>
          </motion.div>

          <motion.div className="feature-card" variants={itemVariants}>
            <div className="feature-icon">📖</div>
            <h3>Learn & Grow</h3>
            <p>Dive deep into topics that matter, from philosophy to technology</p>
          </motion.div>

          <motion.div className="feature-card" variants={itemVariants}>
            <div className="feature-icon">💡</div>
            <h3>Modern Ideas</h3>
            <p>Explore cutting-edge concepts that shape our future</p>
          </motion.div>

          <motion.div className="feature-card" variants={itemVariants}>
            <div className="feature-icon">📅</div>
            <h3>Regular Events</h3>
            <p>Weekly lectures and workshops in an intimate setting</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Image Gallery Section */}
      <section className="gallery-section">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience the Community
        </motion.h2>
        
        <div className="gallery-grid">
          <motion.div 
            className="gallery-item large"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="placeholder-image">
              <span>Event Photo 1</span>
            </div>
          </motion.div>

          <motion.div 
            className="gallery-item"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="placeholder-image">
              <span>Event Photo 2</span>
            </div>
          </motion.div>

          <motion.div 
            className="gallery-item"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="placeholder-image">
              <span>Event Photo 3</span>
            </div>
          </motion.div>

          <motion.div 
            className="gallery-item"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="placeholder-image">
              <span>Event Photo 4</span>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Home
