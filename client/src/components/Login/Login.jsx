import React, { useEffect } from "react";
import { signInWithRedirect, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "./Firebase";
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userData = {
          name: user.displayName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          avatar: user.photoURL
        };
        console.log('User Data:', userData);

        // Navigate to home page when user is authenticated
        navigate('/');
      }
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, [navigate]);

  const handleLogin = () => {
    signInWithRedirect(auth, provider);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <button className="microsoft-login-button" onClick={handleLogin}>
          Sign in with Microsoft
        </button>
      </div>
    </div>
  );
};

export default Login;
