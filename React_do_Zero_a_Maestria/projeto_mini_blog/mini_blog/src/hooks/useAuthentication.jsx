import { db } from "../firebase/config";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import { useState, useEffect } from "react";

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
        systemErroMessage = "Ocorreu um erro, tente mais tarde.";
      }
      setLoading(false);
      setError(systemErroMessage);
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
  };
};
