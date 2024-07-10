// app/context/UserContext.js

import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLocalUser = async () => {
      try {
        const userJson = await AsyncStorage.getItem("@user");
        const userData = userJson ? JSON.parse(userJson) : null;
        setUser(userData);
      } catch (error) {
        console.log(error.message);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000); // Delay setting loading to false by 2 seconds
      }
    };

    checkLocalUser();

    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        await AsyncStorage.setItem("@user", JSON.stringify(user));
      } else {
        setUser(null);
      }
    });

    return () => unsub();
  }, []);

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
