import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
 
  const [email,setemail] =useState()
  const [password, setpassword] = useState()
  const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        axios
          .post("http://localhost:8182/login", { email, password })
          .then((result) => {
            console.log(result)
            if (result.data === "Success") {
              navigate("/home");
              alert("Login Successfully");
            } else {
              alert("Login Failed");
            }
           })
          .catch((err) => console.log(err));
    }

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} >
          
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
                          className="form-control rounded-0"
                          onChange={(e)=>setemail(e.target.value)}
            />
            </div>
                  
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
                          className="form-control rounded-0"
                          onChange={(e)=>setpassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>
        </form>
        <p>New Account</p>
        <Link
          to="/register"
          className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
        >
          Register
        </Link>
      </div>
    </div>
  )
}

export default Login

