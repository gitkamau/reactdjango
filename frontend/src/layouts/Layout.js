import React from 'react';
import {
  Outlet
} from "react-router-dom";
import './assets/Layout.css';
import { NavBar } from './Navbar';

export default function PageLayout() {
  return (
    <div>
      <main>
        <NavBar />
        <Outlet />
      </main>
      {/* <div className="circle1"></div>
      <div className="circle2"></div> */}
    </div>
  );
}


