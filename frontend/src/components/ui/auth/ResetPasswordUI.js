import React from 'react';
import '../../assets/css/auth.css';
// import ResetPassword from '../form/auth/ResetPassword';


export default function ResetPasswordUI() {
  // const{

  // }=ResetPassword();
  return (
    <div className="wrapper">
      <form>
        <h2>Request Password Reset:</h2>
        <div className='form-group'>
          <input
            className='form-control'
            type='email'
            placeholder='Email'
            name='email'
            required
          />
        </div>
        <button className='btn btn-primary' type='submit'>Reset Password</button>
      </form>
    </div>
  );
}