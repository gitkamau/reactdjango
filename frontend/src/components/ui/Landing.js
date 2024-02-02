import React from 'react';
import "../assets/css/Landing.css";
import { Link } from "react-router-dom";
// import landingImage from '../assets/images/_aa5a04cf-3d39-4709-9129-59d1e8205a65.jpg';

export default function Landing() {
  return (
      <section>
      <div className='box'></div>
      <div className='box-2'>
      </div>
      <div className="text-container">
        <h4 className="headline">Transform visual experiences to immersive audio.</h4>
        <p>Synesthesia where your eyes meet your ears in perfect harmony.</p>
        <Link to="/signup" className="signup-button">Try It Out Now</Link>
      </div>
      </section>
  );
}