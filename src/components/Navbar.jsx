import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const location = useLocation()
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          COMMUNITY COLLEGE
        </Link>
        <div className="navbar-links">
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </Link>
          <Link 
            to="/archive" 
            className={location.pathname === '/archive' ? 'nav-link active' : 'nav-link'}
          >
            Archive
          </Link>
          <Link 
            to="/events" 
            className={location.pathname === '/events' ? 'nav-link active' : 'nav-link'}
          >
            Events
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
