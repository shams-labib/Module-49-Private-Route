import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoutes = ({children}) => {

    const {user, loading} = use(AuthContext);

    if(loading){
        return <span className="loading loading-infinity loading-xl"></span>
    }

     if(user){
        return children;
     }

    return <Navigate to={'/login'}></Navigate>
}

export default PrivateRoutes;