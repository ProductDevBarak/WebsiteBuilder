import React from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Prompt from "./components/Prompt/Prompt";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/prompt" element={<Prompt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
