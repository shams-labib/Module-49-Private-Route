import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/_firebase.init';

const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const SignInWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

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
       signOutUser,
       SignInWithGoogle
    }
    return (
        <AuthContext.Provider value={apiInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;