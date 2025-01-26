import "./Login.css"
import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [formData, setFormData] = useState({
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

    axios.post('http://localhost:5001/auth/login', formData)
      .then(response => {
        console.log(response.data);
        setFormData({
          email: '',
          password: ''
        });

        // Navigate to home page after login
        navigate('/home');
      })
      .catch(error => {
        console.error('There was an error!', error.response ? error.response.data : error.message);
      });
  };

  return (
    <div className='login-signup'>
      <form className='container-logsign' onSubmit={handleSubmit}>
        <div className="header-logsign">
          <div className="text-logsign">Login</div>
          <div className="underline"></div>
        </div>
        <div className="inputes-logsign">
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
        <div className="forget-password">Lost Password? <span>Click Here</span></div>    
        <div className="submit-container">
          <button type="submit" className="submit">Login</button>
          <Link to="/Signup"><div className="gray">Sign Up</div></Link>
        </div>
      </form>
    </div>
  )
}

export default Login;
