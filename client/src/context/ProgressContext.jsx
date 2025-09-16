import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { useAuth } from './AuthContext';
import { db } from '../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const ProgressContext = createContext();

export function ProgressProvider({ children }) {
  const [completedItems, setCompletedItems] = useState({ topics: [], quizzes: [] });
  const [loadingProgress, setLoadingProgress] = useState(true);
  const { currentUser } = useAuth();

  // Effect to load progress when user logs in/out or on initial load
  useEffect(() => {
    const loadProgress = async () => {
      try {
        setLoadingProgress(true);
        if (currentUser) {
          // User is logged in, load from Firestore
          const progressDocRef = doc(db, 'users', currentUser.uid);
          const docSnap = await getDoc(progressDocRef);
          if (docSnap.exists() && docSnap.data()) {
            const data = docSnap.data();
            setCompletedItems({
              topics: data.topics || [],
              quizzes: data.quizzes || [],
            });
          } else {
            setCompletedItems({ topics: [], quizzes: [] });
          }
        } else {
          // User is logged out, load from localStorage
          const savedProgress = localStorage.getItem('techTutorProgress');
          setCompletedItems(savedProgress ? JSON.parse(savedProgress) : { topics: [], quizzes: [] });
        }
      } catch (error) {
        console.error("Failed to load user progress:", error);
        setCompletedItems({ topics: [], quizzes: [] }); // Reset to a safe state on error
      } finally {
        setLoadingProgress(false);
      }
    };

    loadProgress();
  }, [currentUser]);

  const markAsComplete = useCallback(async (type, id) => {
      const newCompletedItems = {
        ...completedItems,
        [type]: [...new Set([...(completedItems[type] || []), id])],
      };
  
      setCompletedItems(newCompletedItems); // Optimistic update for snappy UI
  
      if (currentUser) {
        const progressDocRef = doc(db, 'users', currentUser.uid);
        await setDoc(progressDocRef, newCompletedItems, { merge: true });
      } else {
        localStorage.setItem('techTutorProgress', JSON.stringify(newCompletedItems));
      }
    }, [currentUser, completedItems]);

  const isComplete = useCallback((type, id) => {
      return completedItems[type]?.includes(id);
    }, [completedItems]);

  const resetProgress = useCallback(async () => {
      const freshState = { topics: [], quizzes: [] };
      setCompletedItems(freshState);
  
      if (currentUser) {
        const progressDocRef = doc(db, 'users', currentUser.uid);
        await setDoc(progressDocRef, freshState); // Overwrite with empty state
      } else {
        localStorage.setItem('techTutorProgress', JSON.stringify(freshState));
      }
    }, [currentUser]);

  const value = useMemo(() => ({
    completedItems, markAsComplete, isComplete, resetProgress
  }), [completedItems, markAsComplete, isComplete, resetProgress]);

  if (loadingProgress) {
    return <div className="loading-container">Loading Your Progress...</div>;
  }

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}