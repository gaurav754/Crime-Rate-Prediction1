// src/components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { motion } from "framer-motion";
import "../css/Nav.css"

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <motion.nav 
      className="modern-navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="navbar-container">
        {/* Brand Logo */}
        <motion.div
          className="brand-logo"
          onClick={() => navigate("/home")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="brand-icon">🛡️</span>
          <span className="brand-text">CrimeWatch</span>
        </motion.div>

        {/* Navigation Links */}
        {user && (
          <div className="nav-links">
            <Link to="/home" className="nav-link">
              <span className="nav-icon">🏠</span>
              Home
            </Link>
            <Link to="/prediction" className="nav-link">
              <span className="nav-icon">🎯</span>
              Prediction
            </Link>
            <Link to="/community" className="nav-link">
              <span className="nav-icon">👥</span>
              Community
            </Link>
          </div>
        )}

        {/* User Actions */}
        <div className="nav-actions">
          {user ? (
            <div className="user-menu">
              <motion.button 
                className="user-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="user-avatar">👤</span>
                {user.name}
              </motion.button>
              <div className="user-dropdown">
                <button className="dropdown-item" onClick={logout}>
                  <span className="dropdown-icon">🚪</span>
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="btn btn--nav-secondary">
                Login
              </Link>
              <Link to="/signup" className="btn btn--nav-primary">
                Get Started
              </Link>
              <Link to="/dashboard" className="btn btn--nav-primary">
                Dashboard
              </Link>
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
}
