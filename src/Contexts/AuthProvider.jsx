import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../Firebase/_firebase.init';

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password)=>{
        setLoading(true)
      return  createUserWithEmailAndPassword(auth, email, password)
    };

    const SignInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signOutUser = ()=>{
        setLoading(true)
        return signOut(auth);
    }
    
    useEffect(()=>{
        const unsubscriber = onAuthStateChanged(auth, (currentUser)=>{
            console.log("Current user log", currentUser)
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unsubscriber();
        }
    },[])


    const apiInfo = {
        user,
        loading,
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