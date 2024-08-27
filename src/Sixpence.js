import React, { useEffect } from "react";
import "./Sixpence.css";
import teamrwb from "./asset/pics/IMG_3572.PNG";
import nasufun from "./asset/pics/IMG_3568.PNG";

function Sixpence() {
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
      fadeOutAndChangeText("Sixpence");
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
    <div className="Sixpence-container">
      <header className="Sixpence-header-container">
        <div className="Sixpence-header-text" id="backLink">
          Sixpence
        </div>
      </header>
      <div className="Sixpence-content">
        <div class="Sixpence-content-item">
          <img src={teamrwb} alt="TeamRWB" class="Sixpence-content-image" />
          <p class="Sixpence-content-text">TeamRWB</p>
        </div>
        <div class="Sixpence-content-item">
          <img src={nasufun} alt="NasuFun" class="Sixpence-content-image" />
          <p class="Sixpence-content-text">NasuFun</p>
        </div>
      </div>
    </div>
  );
}

export default Sixpence;
