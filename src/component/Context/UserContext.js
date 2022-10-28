import React, { createContext, useEffect, useState } from "react";
import { app } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const auth = getAuth(app);
export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(user);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const profileUpdated = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };


  const updateEmail = () => {
    setLoading(true);
    return sendEmailVerification(auth.currentUser);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const logInWithGit = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  };

  const handleEmailPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
  }


  const userInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    userLogin,
    updateEmail,
    logOut,
    googleLogin,
    logInWithGit,
    profileUpdated,
    handleEmailPassword
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
