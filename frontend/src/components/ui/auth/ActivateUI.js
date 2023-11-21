import React from 'react';
import '../../assets/css/auth.css';
// import LogIn from '../form/auth/LogIn';


export default function ActivateUI() {
  // const{

  // }=LogIn();
  return (
    <div className="wrapper">
      <form>
        <h2>Verify your Account</h2>
        <button className='btn btn-primary' type='button'>Verify</button>
      </form>
    </div>
  );
}