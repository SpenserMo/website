import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="Navbar-container">
      <button className="Navbar-button" onClick={() => navigate("/sixpence")}>
        Sixpence
      </button>
      <button className="Navbar-button" onClick={() => navigate("/moon")}>
        The Moon
      </button>
      <button className="Navbar-button" onClick={() => navigate("/hobbies")}>
        Hobbies
      </button>
    </div>
  );
}

export default Navbar;
