"use client";
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '@/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import Loading from '@/components/Loading';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setLoading(true); // Set loading to true immediately
      if (currentUser) {
        try {
          const userDocRef = doc(db, 'users', currentUser.uid);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUser({
              uid: currentUser.uid,
              email: currentUser.email,
              displayName: userData.name || currentUser.displayName || 'Guest',
              phoneNumber: userData.phoneNumber || '',
            });
          } else {
            setUser({
              uid: currentUser.uid,
              email: currentUser.email,
              displayName: currentUser.displayName || 'Guest',
            });
          }
        } catch (error) {
          console.error("Error fetching user data from Firestore:", error);
          setUser(null); // Set user to null in case of error
        }
      } else {
        setUser(null);
      }
      setLoading(false); // Ensure loading is set to false after processing
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {loading ? <div className="flex items-center justify-center h-screen">
        <Loading/>
      </div> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
