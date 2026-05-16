/* ===============================
   IMAGE HOVER TOGGLE FUNCTIONS
   Show/hide hidden info panels
================================= */

// Reveal hidden info
function toggleInfo() {
  const container = document.querySelector(".info-image");
  container.classList.add("active");
}

// Hide hidden info
function showImage() {
  const container = document.querySelector(".info-image");
  container.classList.remove("active");
}


/* ===============================
   SECTION FADE-IN ON SCROLL
   Fade + slide animation when
   sections enter the viewport
================================= */

const sections = document.querySelectorAll(".infoblock, .explore");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;

    // Scrolls gallery left anf right
    if (top < window.innerHeight - 100) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
});


/* ===============================
   PLANET GALLERY SCROLLING
   Horizontal scroll buttons
================================= */

const gallery = document.getElementById("planetGallery");

// Scroll gallery left or right
function scrollPlanets(direction) {
  const scrollAmount = gallery.offsetWidth * 0.8; // 80% of visible width

  gallery.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}


/* ===============================
   DOM READY: Ensure scrollPlanets
   is available for inline HTML
================================= */

document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("planetGallery");

  window.scrollPlanets = function (direction) {
    const scrollAmount = gallery.offsetWidth * 0.8;

    gallery.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth"
    });
  };
});

/* ===============================
  Script for navigation menu toggle
================================= */
const toggle = document.querySelector(".dropdown");
const nav = document.querySelector(".navlinks");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});