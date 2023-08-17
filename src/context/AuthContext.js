import React, { createContext, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "./../auth/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
// import { toastSuccessNotify } from "../helpers/ToastNotify";
// import { toastErrorNotify } from "./../helpers/ToastNotify";
import { useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
//   const navigate = useNavigate();
  useEffect(() => {
    userObserver();
  }, []);

  const createUser = async (email, password, displayName) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: displayName,
      });

    //   navigate("/");
    //   toastSuccessNotify("Registered Successfully!");
    } catch (error) {
    //   toastErrorNotify(error.message);
    }
  };

  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    //   navigate("/");
    //   toastSuccessNotify("Logged in Successfully!");
    } catch (error) {
    //   toastErrorNotify(error.message);
    }
  };

  const logOut = () => {
    signOut(auth);
  };

  const userObserver = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, photoURL } = user;
        setCurrentUser({ email, displayName, photoURL });
        console.log(user);
      } else {
        setCurrentUser(false);
        console.log("user logged out");
      }
    });
  };

  const signUpProvider = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        // navigate("/");
        // toastSuccessNotify("Logged in succesfully!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const values = { signUpProvider, logOut, signIn, createUser, currentUser };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
