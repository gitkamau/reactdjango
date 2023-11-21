import React from 'react';
import '../../assets/css/auth.css';
// import ResetPasswordConfirm from '../form/auth/ResetPasswordConfirm';


export default function ResetPasswordConfirmUI() {
  // const{

  // }=ResetPasswordConfirm();
  return (
    <div className="wrapper">
      <form>
        <div className='form-group'>
          <input
            className='form-control'
            type='password'
            placeholder='New Password'
            name='new_password'
            minLength='6'
            required
          />
        </div>
        <div className='form-group'>
          <input
            className='form-control'
            type='password'
            placeholder='Confirm New Password'
            name='re_new_password'
            minLength='6'
            required
          />
        </div>
        <button className='btn btn-primary' type='submit'>Reset Password</button>
      </form>
    </div>
  );
}