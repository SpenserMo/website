import React from "react";
import Navbar from "./Navbar";
import "./Home.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Home() {
  return (
    <div className="Home-container">
      <Navbar />
      <header className="Home-header">SPENSER MO</header>
      <p className="Home-content"></p>
      <footer className="Home-footer">
        <a
          href="https://github.com/SpenserMo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/spensermo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
      </footer>
    </div>
  );
}

export default Home;
