import React, { useState } from "react";
import '../../src/styles/register.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Register() {
   const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/auth/register', formData);
      console.log("Registered Successfully:", res.data);
      alert("User registered successfully!");
    } catch (err) {
      console.log("Error registering user:", err.message);
    }
    
  };

  const handleLogin = () => {
    navigate('/login'); 
  };

  return (
    <div className="registration-wrapper">
      <div className="form-container">
        <h2>Registration</h2>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label>Role</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          />

          <button type="submit">Register</button>
          <p>Already Register? <button type="button" onClick={handleLogin}>Login</button></p>
        </form>
      </div>
    </div>
  );
}
