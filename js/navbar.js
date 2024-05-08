"use strict";

const navbar = document.getElementById("navbar");

// Add a scroll event listener to the window
window.addEventListener("scroll", () =>
  navbar.classList[window.scrollY >= 400 ? "add" : "remove"]("fixed")
);
