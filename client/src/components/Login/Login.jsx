import React, { useEffect } from "react";
import { signInWithRedirect, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../../config/Firebase_Config";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // console.log("User authenticated:", user);
        const userData = {
          name: user.displayName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          avatar: user.photoURL,
        };
        console.log("User Data:", userData);
        navigate("/");
      } else {
        console.log("No user authenticated");
      }
    });

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
}
