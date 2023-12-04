import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);


    // creating User
    const createUser = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Logging In 
    const signIn =(email,password)=>{
        setloading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    // Logging Out 
    const logOut =()=>{
        setloading(true);
        return signOut(auth);
    }

    //  Updating User Profile
    const updateUserProfile = (name, photo) =>{
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUSer => {
            setUser(currentUSer);
            console.log('current USer', currentUSer);
            setloading(false);
        });
        return () => {
            return unSubscribe();
        }

    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;