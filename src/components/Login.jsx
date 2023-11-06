import React from "react";
import '../styles/Login.css'

const Login = () => {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
      <div className='p-3 rounded w-25 borde loginForm'>
        <h2>Login Form</h2>
        <form>
          <div className='mb-3'>
            <label htmlFor='email'>
              <strong>Email:</strong>
            </label>
            <input
              type='email'
              name='email'
              autoComplete='off'
              placeholder='Enter Email'
              className='form-control'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>
              <strong>Password:</strong>
            </label>
            <input
              type='password'
              name='password'
              autoComplete='off'
              placeholder='Enter Password'
              className='form-control'
            />
          </div>
       <button className="btn btn-success w-100 rounded-0 mb-2">Login</button>
      <div className="mb-1">
        <input type="checkbox" name="tick" id="tick" className="me-2"/>
        <label htmlFor="checkbox"> You agree with the terms & conditions</label>
      </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
