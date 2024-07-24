import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './assets/NavBar.css';

export function NavBar() {
  const location = useLocation();

  return (
    <div>
      {location.pathname === '/' && (
        <div className="title">
          Video-Audio Mapping
        </div>
      )}
      <nav className="nav">
        <ul className="nav-list">
          <li className="li-1">
            {location.pathname === '/' && (
              <Link to="/signup" className='signup' >
                Sign Up
              </Link>
            )}
          </li>
          <li>
            {location.pathname === '/' && (
              <Link to="/login" className="login">
                Log In
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
