import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Sidebar.css';

function Sidebar({ isSidebarOpen, toggleSidebar, categories }) {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  }

  const handleLinkClick = () => {
    if (isSidebarOpen) {
      toggleSidebar();
    }
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">TechTutor</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} end onClick={handleLinkClick}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/meet-instructor" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={handleLinkClick}>
              Meet Your Instructor
            </NavLink>
          </li>
          {Array.isArray(categories) && categories.map(category => (
            <li key={category.id}>
              <NavLink to={`/${category.id}`} className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={handleLinkClick}>
                {category.name}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink to="/quizzes" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={handleLinkClick}>
              Take A Quiz
            </NavLink>
          </li>
          <li>
            <NavLink to="/badges" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={handleLinkClick}>
              My Badges
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        {currentUser ? (
          <>
            <div className="sidebar-user-email">
              <span>{currentUser.email}</span>
            </div>
            <button onClick={handleLogout} className="sidebar-link-button">
              Log Out
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" className="sidebar-button" onClick={handleLinkClick}>
              Log In
            </NavLink>
            <NavLink to="/signup" className="sidebar-button signup-button" onClick={handleLinkClick}>
              Sign Up
            </NavLink>
          </>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;
