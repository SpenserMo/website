import React, { useEffect } from "react";
import "./Hobbies.css";
import img3574 from "./asset/pics/hobbies/IMG_3574.JPG";
import img3575 from "./asset/pics/hobbies/IMG_3575.JPG";
import img3576 from "./asset/pics/hobbies/IMG_3576.JPG";
import img3577 from "./asset/pics/hobbies/IMG_3577.JPG";
import img3578 from "./asset/pics/hobbies/IMG_3578.JPG";
import img3579 from "./asset/pics/hobbies/IMG_3579.JPG";
import img3581 from "./asset/pics/hobbies/IMG_3581.JPG";
import img3582 from "./asset/pics/hobbies/IMG_3582.jpg";

function Hobbies() {
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
      fadeOutAndChangeText("Hobbies");
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
    <div className="Hobbies-container">
      <header className="Hobbies-header-container">
        <div className="Hobbies-header-text" id="backLink">
          Hobbies
        </div>
      </header>
      <div className="Hobbies-content">
        <div class="Hobbies-content-item">
          <img src={img3574} alt="img3574" class="Hobbies-content-image" />
          <p class="Hobbies-content-text">Eclipse</p>
        </div>
        <div class="Hobbies-content-item">
          <img src={img3575} alt="img3575" class="Hobbies-content-image" />
          <p class="Hobbies-content-text">Nashville</p>
        </div>
        <div class="Hobbies-content-item">
          <img src={img3576} alt="img3576" class="Hobbies-content-image" />
          <p class="Hobbies-content-text">Antelope Canyon</p>
        </div>
        <div class="Hobbies-content-item">
          <img src={img3577} alt="img3577" class="Hobbies-content-image" />
          <p class="Hobbies-content-text">North Michigan</p>
        </div>
        <div class="Hobbies-content-item">
          <img src={img3578} alt="img3578" class="Hobbies-content-image" />
          <p class="Hobbies-content-text">Band</p>
        </div>
        <div class="Hobbies-content-item">
          <img src={img3579} alt="img3579" class="Hobbies-content-image" />
          <p class="Hobbies-content-text">Yellow Stone</p>
        </div>
        <div class="Hobbies-content-item">
          <img src={img3581} alt="img3581" class="Hobbies-content-image" />
          <p class="Hobbies-content-text">Skiing</p>
        </div>
        <div class="Hobbies-content-item">
          <img src={img3582} alt="img3582" class="Hobbies-content-image" />
          <p class="Hobbies-content-text">New York</p>
        </div>
      </div>
    </div>
  );
}

export default Hobbies;
