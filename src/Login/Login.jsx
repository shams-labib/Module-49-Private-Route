import React from 'react';
import { Link } from 'react-router';

const Login = () => {

    const handleLogin = (e)=>{
        e.preventDefault()
    }

    return (
        <div className="card bg-base-100 w-full mx-auto mt-10 max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
         <h1 className="text-5xl font-bold">Log In Now!</h1> 
        <form onSubmit={handleLogin}>
                    <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email"
           name='email'
           className="input" 
           placeholder="Email" />
          <label className="label">Password</label>
          <input
          name='password'
           type="password" 
           className="input" 
           placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        </form>
        <p>New in our website? <Link to={'/register'} className='text-blue-500 hover:text-blue-700'>Register</Link></p>
      </div>
    </div>
    );
};

export default Login;