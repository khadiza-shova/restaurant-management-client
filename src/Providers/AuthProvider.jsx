import React, { children, useEffect, useState } from 'react';
import app from '../utility/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext } from 'react';
import axios from 'axios';

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    // User Create 

    const createUser = (email, pass) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, pass);
    }

    const signUser = (email, pass) => {
        setLoading(true);

        return signInWithEmailAndPassword(auth, email, pass)
    }

    const SignOut = () => {
        return signOut(auth);
    }

    // Google SignIn 
    const googleAuth = () => {
        return signInWithPopup(auth, provider);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // const userEmail = currentUser.email || user.email;
            // const loggedUser = { email: userEmail };
            console.log("Current User", currentUser);
            setLoading(false);
            
            // if(currentUser) {
            //     axios.post('https://restaurant-management-server-gamma.vercel.app/jwt', loggedUser, { withCredentials: true })
            //     .then(res => {
            //         console.log('token response', res.data);
            //     })
            // }

        })
        return () => {
            return unSubscribe();
        }
    }, [])

    const authInfo = { createUser, signUser, user, SignOut, googleAuth, loading }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;