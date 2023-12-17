import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpUser } from './signUpSlice';
import '../assets/css/auth.css';

export default function SignUpView(){
  const dispatch = useDispatch();
  
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    re_password: '',
  });

  const { first_name, last_name, email, password, re_password } = formData;
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    try {
        dispatch(signUpUser(formData))
        setMessage('Registration successful. Check your email for verification.')
    } catch (error) {
        console.error('Signup error:', error);
      }
  };

  return (
    <div className="wrapper">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h2>Sign Up</h2>
        <p>Create your Account</p>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="First Name"
            name="first_name"
            value={first_name}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Last Name"
            name="last_name"
            value={last_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            minLength="6"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            placeholder="Confirm Password"
            name="re_password"
            value={re_password}
            minLength="6"
            onChange={handleChange}
            required
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};