import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Welcome to the Home Page</h1>;
}

function About() {
  return <h1>About Us</h1>;
}

export default App;
