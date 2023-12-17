import React from 'react';
// import { IonIcon } from '@ionic/react';
import { Link } from "react-router-dom";
import '../assets/NavBar.css';

export function NavBar() {
  return (
    <div>
      <nav className='nav'>
        <ul>
          {/* <li className='home'>
            <IonIcon icon={homeOutline} />
          </li> */}
          <Link to="/signup" className='signup'>
              Sign Up
            </Link>
        </ul>
      </nav>
    </div>
  );
}