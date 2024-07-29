import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

  export const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    try {
      if (data.email === 'admin@gmail.com' && data.password === 'admin123') {
        alert('Login Success');
        localStorage.setItem('email', data.email);
        navigate('/admin');
      } else if (data.email === 'user@gmail.com' && data.password === 'user123') {
        alert('Login Success');
        localStorage.setItem('email', data.email);
        navigate('/user');
      } else {
        alert('Invalid email or password.');
      }
    } catch (error) {
      alert('Login Failed');
    }
  };

  return (
    <div className="container">
      <div className="login-container">
        <h2>Login</h2>
        <form id="loginForm" onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

