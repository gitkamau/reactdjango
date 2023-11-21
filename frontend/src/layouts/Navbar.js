import React from 'react';
import { IonIcon } from '@ionic/react';
import { homeOutline, cloudUploadOutline, personOutline } from 'ionicons/icons';
import '../assets/NavBar.css';

export function NavBar() {
  return (
    <div>
      <nav className='nav'>
        <ul>
          <li className='home'>
            <IonIcon icon={homeOutline} />
          </li>
          <li className='upload'><IonIcon icon={cloudUploadOutline} /></li>
          <li className='profile'><IonIcon icon={personOutline} /></li>
        </ul>
      </nav>
    </div>
  );
}