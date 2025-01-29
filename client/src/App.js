import React from "react";
import Home from "./components/Home/Home";
import AuthPage from "./components/Login/AuthPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Editor from "./components/Editor/Editor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthPage/>} />
        <Route path="/editor" element={<Editor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
