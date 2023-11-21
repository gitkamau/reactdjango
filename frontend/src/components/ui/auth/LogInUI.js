import React from 'react';
import '../../assets/css/auth.css';
// import LogIn from '../form/auth/LogIn';


export default function LogInUI() {
  // const{

  // }=LogIn();
  return (
    <div className="wrapper">
      <form>
        <h2>Sign In</h2>
        <p>Sign into your Account</p>
        <div className='form-group'>
          <input
            className='form-control'
            type='email'
            placeholder='Email'
            name='email'
            required
          />
        </div>
        <div className='form-group'>
          <input
            className='form-control'
            type='password'
            placeholder='Password'
            name='password'
            minLength='6'
            required
          />
        </div>
        <button className='btn btn-primary' type='submit'>Login</button>
        <div class="register">
          <p>Don't have an account?</p><h2>Register</h2>
        </div>
        <div class="forget">
          <p className='mt-3'>
            Forgot your Password?
          </p>
        </div>
      </form>
    </div>
  );
}