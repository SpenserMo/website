import React, { useEffect } from "react";
import "./Moon.css";
import proj5545 from "./asset/pics/final_proj_4k_512.png";
import proj5523 from "./asset/pics/5523.png";
import proj5542 from "./asset/pics/5542.png";

function Moon() {
  useEffect(() => {
    const backLink = document.getElementById("backLink");

    const fadeOutAndChangeText = (newText) => {
      backLink.style.transition = "opacity 0.3s ease";
      backLink.style.opacity = 0;

      setTimeout(() => {
        backLink.textContent = newText;
        backLink.style.opacity = 1;
      }, 300);
    };

    backLink.addEventListener("mouseover", function () {
      fadeOutAndChangeText("Back to home page");
    });

    backLink.addEventListener("mouseout", function () {
      fadeOutAndChangeText("The Moon");
    });

    backLink.addEventListener("click", function (event) {
      window.location.href = "/";
    });

    return () => {
      backLink.removeEventListener("mouseover", () => {});
      backLink.removeEventListener("mouseout", () => {});
      backLink.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <div className="Moon-container">
      <header className="Moon-header-container">
        <div className="Moon-header-text" id="backLink">
          The Moon
        </div>
      </header>
      <div className="Moon-content">
        <div class="Moon-content-item">
          <img src={proj5545} alt="proj5545" class="Moon-content-image" />
          <p class="Moon-content-text">PBRT</p>
        </div>
        <div class="Moon-content-item">
          <img src={proj5523} alt="proj5523" class="Moon-content-image" />
          <p class="Moon-content-text">One Pass Stochastic Gradient Descent</p>
        </div>
        <div class="Moon-content-item">
          <img src={proj5542} alt="proj5542" class="Moon-content-image" />
          <p class="Moon-content-text">WebGL</p>
        </div>
      </div>
    </div>
  );
}

export default Moon;
