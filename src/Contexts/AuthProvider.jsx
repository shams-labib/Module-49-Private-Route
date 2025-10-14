import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/_firebase.init';

const AuthProvider = ({children}) => {

    const createUser = (email, password)=>{
      return  createUserWithEmailAndPassword(auth, email, password)
    }


    const apiInfo = {
       createUser
    }
    return (
        <AuthContext value={apiInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;