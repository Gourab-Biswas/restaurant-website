import "./Login.css"
import {Link} from 'react-router-dom'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5001/auth/signup', formData)
      .then(response => {
        console.log(response.data);
        setFormData({
          username: '',
          email: '',
          password: ''
        });

        // Navigate to login page after signup
        navigate('/login');
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <div className='login-signup'>
      <form className='container-logsign' onSubmit={handleSubmit}>
        <div className="header-logsign">
          <div className="text-logsign">Sign Up</div>
          <div className="underline"></div>
        </div>
        <div className="inputes-logsign">
          <div className="input-logsign">
            <i className="ri-user-3-fill"></i>
            <input 
              type="text" 
              name="username" 
              placeholder='Name' 
              onChange={handleChange} 
            />
          </div>
          <div className="input-logsign">
            <i className="ri-mail-fill"></i>
            <input 
              type="email" 
              name="email" 
              placeholder='Email Id' 
              onChange={handleChange} 
            />
          </div>
          <div className="input-logsign">
            <i className="ri-lock-2-fill"></i>
            <input 
              type="password" 
              name="password" 
              placeholder='Password' 
              onChange={handleChange} 
            />
          </div>
        </div>
        <div className="submit-container">
          <Link to="/Login"><div className="gray">Login</div></Link>
          <button type="submit" className="submit">Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default Signup;
