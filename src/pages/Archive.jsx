import { motion } from 'framer-motion'
import { useState } from 'react'
import './Archive.css'

function Archive() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

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

  const filters = ['All', 'Technology', 'Philosophy', 'Social Impact', 'Creativity']

  const lectures = [
    {
      id: 1,
      title: 'The Future of Collective Intelligence',
      speaker: 'Dr. Sarah Chen',
      date: 'November 10, 2025',
      category: 'Technology',
      image: 'lecture1.jpg'
    },
    {
      id: 2,
      title: 'Philosophy of Connection in Modern Times',
      speaker: 'Marcus Rivera',
      date: 'November 3, 2025',
      category: 'Philosophy',
      image: 'lecture2.jpg'
    },
    {
      id: 3,
      title: 'Building Sustainable Communities',
      speaker: 'Elena Kowalski',
      date: 'October 27, 2025',
      category: 'Social Impact',
      image: 'lecture3.jpg'
    }
  ]

  const filteredLectures = lectures.filter(lecture => {
    const matchesFilter = activeFilter === 'All' || lecture.category === activeFilter
    const matchesSearch = lecture.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         lecture.speaker.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <motion.div 
      className="archive"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <div className="archive-container">
        <motion.div 
          className="archive-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1 className="archive-title">Lecture Archive</h1>
          <p className="archive-description">
            Explore our collection of past lectures, workshops, and resources. All materials are available to the community.
          </p>
        </motion.div>

        <motion.div 
          className="search-filter-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input 
              type="text"
              placeholder="Search lectures, speakers, topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="filter-buttons">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="lectures-grid"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          {filteredLectures.map((lecture) => (
            <motion.div 
              key={lecture.id}
              className="lecture-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="lecture-image">
                <div className="placeholder-image">
                  <span>Lecture Photo</span>
                </div>
                <span className="lecture-category">{lecture.category}</span>
              </div>
              <div className="lecture-content">
                <div className="lecture-date">
                  <span className="date-icon">📅</span>
                  {lecture.date}
                </div>
                <h3 className="lecture-title">{lecture.title}</h3>
                <p className="lecture-speaker">by {lecture.speaker}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredLectures.length === 0 && (
          <motion.div 
            className="no-results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p>No lectures found matching your criteria.</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default Archive
