"use-strict";

const hamburger = document.getElementById("hamburger");
const hamburgerClose = document.getElementById("hamburger-close");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  nav.classList.add("active");
});

hamburgerClose.addEventListener("click", () => {
  nav.classList.remove("active");
});
