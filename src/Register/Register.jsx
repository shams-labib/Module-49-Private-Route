// import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router';
// import { auth } from '../Firebase/_firebase.init';
import { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext';

const Register = () => {

    const {createUser} = use(AuthContext);


    const handleRegister = (e)=>{
        e.preventDefault();
        
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password).then(result => console.log(result)).catch(err=> console.log(err))

        
        // createUserWithEmailAndPassword(auth, email, password).then(result => {
        //     console.log(result.user)
        // }).catch(err => {
        //     console.log(err);
        // });

    }

    return (
    <div className="card bg-base-100 w-full mx-auto mt-10 max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
         <h1 className="text-5xl font-bold">Register now!</h1> 
        <form onSubmit={handleRegister}>
                    <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="text"
           name='name'
           className="input" 
           placeholder="Your name" />
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
        <p>Already have an account? <Link to={'/login'} className='text-blue-500 hover:text-blue-700'>LogIn</Link></p>
      </div>
    </div>
    );
};

export default Register;