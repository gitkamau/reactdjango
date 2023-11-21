import React from 'react';
import '../../assets/css/auth.css';
// import SignUp from '../form/auth/SignUp';


export default function SignUpUI() {
    // const{

    // }=SignUp();
    return (
        <div className="wrapper">
            <form>
                <h2>Sign Up</h2>
                <p>Create your Account</p>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='First Name'
                        name='first_name'
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='Last Name'
                        name='last_name'
                        required
                    />
                </div>
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
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Confirm Password'
                        name='re_password'
                        minLength='6'
                        required
                    />
                </div>
                <button className='btn btn-primary' type='submit'>Register</button>
                <div class="register">
                    <p>Already have an account?</p><h2>Sign In</h2>
                </div>
            </form>
        </div>
    );
}