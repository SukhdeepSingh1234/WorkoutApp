import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState({
    history: [],
    best_streak: 0,
    streak: 0,
    kcal: 0,
    time: 0,
    workouts: 0,
    summary: [],
  });

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

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const docRef = doc(db, 'workoutprogress', user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProgress(docSnap.data());
        } else {
          const initialProgress = {
            history: [],
            best_streak: 0,
            streak: 0,
            kcal: 0,
            time: 0,
            workouts: 0,
            summary: [],
          };
          await setDoc(docRef, initialProgress);
          setProgress(initialProgress);
        }
      }
    };

    fetchData();
  }, [user, progress]);


  return (
    <UserContext.Provider value={{ user, loading, progress,setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
