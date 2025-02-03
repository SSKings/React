import { db } from "../firebase/config";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import { useState, useEffect } from "react";
import { data } from "react-router-dom";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  //cleanup
  // deal with memory leak
  const [canceled, setCanceled] = useState(false);

  const auth = getAuth();

  const checkIfIsCanceled = () => {
    if (canceled) {
      return;
    }
  };

  const createUser = async (data) => {
    checkIfIsCanceled();

    setLoading(true);
    setError(null);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, {
        displayName: data.displayName,
      });

      setLoading(false);

      return user;
    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);

      let systemErroMessage;

      if (error.message.includes("Password")) {
        systemErroMessage = "Password must contain at least 6 characters";
      } else if (error.message.includes("email-already")) {
        systemErroMessage = "Email already registered";
      } else {
        systemErroMessage = "Unexpected error";
      }
      setLoading(false);
      setError(systemErroMessage);
    }
  };

  // Logout - sign out
  const logout = () => {
    checkIfIsCanceled();
    signOut(auth);
  };

  //login - sign in
  const login = async (data) => {
    checkIfIsCanceled();
    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);

      setLoading(false);
    } catch (error) {
      console.log(error);
      console.log(error.message);
      console.log(typeof error.message);
      console.log(error.message.includes("user-not"));

      let systemErroMessage;

      if (error.message.includes("invalid-credential")) {
        systemErroMessage = "Incorrect email or password";
      } else {
        systemErroMessage = "Unexpected error";
      }

      setError(systemErroMessage);
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => setCanceled(true);
  }, []);

  return {
    auth,
    createUser,
    error,
    loading,
    logout,
    login,
  };
};
