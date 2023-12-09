import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user,loading}= useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);
   
    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
    }
    if(user?.email){
       return children;
    }
    else{
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
};

export default PrivateRoute;