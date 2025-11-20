import { motion } from 'framer-motion'
import './Events.css'

function Events() {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  }

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 }
  }

  const events = [
    {
      id: 1,
      title: 'The Art of Meaningful Conversation',
      speaker: 'Dr. Amara Johnson',
      date: 'November 27, 2025',
      time: '7:00 PM - 9:00 PM',
      location: 'Main Hall, Downtown',
      category: 'Communication',
      status: 'Spots Available',
      statusColor: '#4CAF50',
      registered: 45,
      capacity: 80,
      image: 'event1.jpg'
    },
    {
      id: 2,
      title: 'Digital Minimalism: Reclaiming Your Time',
      speaker: 'Cal Newport',
      date: 'December 4, 2025',
      time: '6:30 PM - 8:30 PM',
      location: 'Community Space, Arts District',
      category: 'Lifestyle',
      status: 'Filling Fast',
      statusColor: '#FF9800',
      registered: 52,
      capacity: 60,
      image: 'event2.jpg'
    }
  ]

  return (
    <motion.div 
      className="events"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <div className="events-container">
        <motion.div 
          className="events-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1 className="events-title">Upcoming Events</h1>
          <p className="events-description">
            Join us for thought-provoking lectures, interactive workshops, and community gatherings. 
            All events are designed to foster connection and growth.
          </p>
        </motion.div>

        <motion.div 
          className="events-list"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          {events.map((event) => (
            <motion.div 
              key={event.id}
              className="event-card"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="event-image-section">
                <div className="event-placeholder-image">
                  <span>Event Photo</span>
                </div>
              </div>

              <div className="event-details-section">
                <div className="event-header-row">
                  <span className="event-category">{event.category}</span>
                  <span 
                    className="event-status"
                    style={{ color: event.statusColor }}
                  >
                    {event.status}
                  </span>
                </div>

                <h2 className="event-title">{event.title}</h2>
                <p className="event-speaker">with {event.speaker}</p>

                <div className="event-info-grid">
                  <div className="event-info-item">
                    <span className="info-icon">📅</span>
                    <span>{event.date}</span>
                  </div>
                  <div className="event-info-item">
                    <span className="info-icon">🕐</span>
                    <span>{event.time}</span>
                  </div>
                  <div className="event-info-item">
                    <span className="info-icon">📍</span>
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="event-registration">
                  <div className="registration-info">
                    <span className="info-icon">👥</span>
                    <span>{event.registered} / {event.capacity} registered</span>
                    <span className="registration-percentage">
                      {Math.round((event.registered / event.capacity) * 100)}%
                    </span>
                  </div>
                  <div className="progress-bar">
                    <motion.div 
                      className="progress-fill"
                      initial={{ width: 0 }}
                      animate={{ width: `${(event.registered / event.capacity) * 100}%` }}
                      transition={{ delay: 0.5, duration: 1 }}
                      style={{ backgroundColor: event.statusColor }}
                    />
                  </div>
                </div>

                <motion.button 
                  className="register-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Register →
                </motion.button>

                <motion.div 
                  className="scroll-down-indicator"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  ↓
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Events
