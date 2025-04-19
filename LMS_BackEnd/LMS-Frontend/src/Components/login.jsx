import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../src/styles/login.css';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/auth/login', formData);
      console.log('Login success:', res.data);
      alert('Login successful!');
      if(res){
        navigate('/home');
      }
    } catch (err) {
      console.error('Login failed:', err.response?.data?.message || err.message);
      alert('Invalid credentials!');
    }
  };

  const handleRegister = () => {
    navigate('/register');
  }; // ✅ This closing brace was missing

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Login</button>

          <p className="register-link">
            Don't have an account?
            <button type="button" onClick={handleRegister} className="register-button">Register</button>
          </p>
        </form>
      </div>
    </div>
  );
}
