import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Sixpence from "./Sixpence";
import Moon from "./Moon";
import Hobbies from "./Hobbies";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sixpence" element={<Sixpence />} />
        <Route path="/moon" element={<Moon />} />
        <Route path="/hobbies" element={<Hobbies />} />
      </Routes>
    </Router>
  );
}

export default App;
