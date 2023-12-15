import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Config/firebase.config";
import PropTypes from 'prop-types'
import axios from "axios";


export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    //sign  Up
    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //sign In
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //Sign In With Google
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    //update Profile 
    const handleUpdateProfile = (name, photoUrl) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
        });
    }
    //Sign out
    const logout = () => {
        setLoading(true)
        return signOut(auth);
    };
    //user observation
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email
            setUser(currentUser)
            setLoading(false)
            if (currentUser) {
                axios.post('https://library-management-system-server-ivory.vercel.app/jwt', userEmail, { withCredentials: true })
                    .then(() => {
                        // console.log("token in useeffect ", res.data)
                    })
            } else {
                axios.post('https://library-management-system-server-ivory.vercel.app/logout', userEmail, { withCredentials: true })
                    .then(() => {
                        // console.log(res.data)
                    })
            }
        })
        return () => {
            unsubscribe;
        };
    }, []);

    const authInfo = {
        user,
        loading,
        signUp,
        signIn,
        googleSignIn,
        handleUpdateProfile,
        logout

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;