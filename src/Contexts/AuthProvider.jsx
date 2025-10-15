import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../Firebase/_firebase.init';

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const createUser = (email, password)=>{
      return  createUserWithEmailAndPassword(auth, email, password)
    };

    const SignInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signOutUser = ()=>{
        return signOut(auth);
    }
    
    useEffect(()=>{
        const unsubscriber = onAuthStateChanged(auth, (currentUser)=>{
            console.log("Current user log", currentUser)
            setUser(currentUser)
        })
        return ()=>{
            unsubscriber();
        }
    },[])


    const apiInfo = {
        user,
       createUser,
       SignInUser,
       signOutUser
    }
    return (
        <AuthContext.Provider value={apiInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;