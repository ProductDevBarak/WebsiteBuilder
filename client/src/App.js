import React from "react";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import Prompt from "./components/Prompt/Prompt.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./utils/ProtectedRoutes.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoutes/>}>
            <Route path="/" element={<Home />} />
            <Route path="/prompt" element={<Prompt />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
