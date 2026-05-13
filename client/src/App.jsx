// client/src/App.jsx
import React, { useState, useEffect } from 'react';
import LoginPage from './pages/Login/LoginPage';
import SignupPage from './pages/Signup/SignupPage';
import ChatPage from './pages/Chat/ChatPage';
import AuthorityDashboard from './pages/Dashboard/AuthorityDashboard';
import './App.css'; 

import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);
  const [currentView, setCurrentView] = useState('login');
  const [userDetails, setUserDetails] = useState({ role: null, location: null });
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
      } else {
        setUser(null);
        setUserDetails({ role: null, location: null });
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLoginSuccess = (data) => {
    setUserDetails({ role: data.role, location: data.location });
  };

  const handleSignupSuccess = () => {
    setCurrentView('login');
  };

  const handleLogout = () => {
    signOut(auth).catch((error) => console.error("Logout Error:", error));
  };

  if (!user) {
    return (
      <div>
        {currentView === 'login' ? (
          <LoginPage 
            onLoginSuccess={handleLoginSuccess} 
            onToggleAuth={() => setCurrentView('signup')}
          />
        ) : (
          <SignupPage 
            onSignupSuccess={handleSignupSuccess} 
            onToggleAuth={() => setCurrentView('login')}
          />
        )}
      </div>
    );
  } else {
    if (userDetails.role === 'Authority') {
      return <AuthorityDashboard user={userDetails} handleLogout={handleLogout} />;
    } else {
      return <ChatPage user={userDetails} handleLogout={handleLogout} />;
    }
  }
}

export default App;
